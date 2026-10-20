//  MASTER ENGINE STATE & CONFIG
// =============================================

let state = {
  node: 'intro',
  lineIndex: 0,
  affection: {
    hana: 0,
    yuki: 0,
    rin: 0,
  },
  isTyping: false,
  isAuto: false,
  isSkip: false,
  isUIHidden: false,
  backlog: [],
  saves: {},
  unlockedEndings: {},
  cfg: {
    textSpeed: 24,       // ms per char
    autoDelay: 2200,     // ms after line
    bgmVol: 0.35,
    sfxVol: 0.6,
  }
};

let typewriterTimer = null;
let autoTimer = null;
let chapterTimer = null;

// =============================================
//  STORYLINE & DIALOGUE LOCALIZATION HELPERS
// =============================================

function getLocalizedSpeaker(speakerKey, defaultName) {
  if (typeof CHAR_NAMES_I18N !== 'undefined' && typeof currentLang !== 'undefined' && CHAR_NAMES_I18N[currentLang]) {
    return CHAR_NAMES_I18N[currentLang][speakerKey] || defaultName;
  }
  return defaultName;
}

function getLocalizedLineText(nodeId, lineIndex, defaultText) {
  if (typeof currentLang === 'undefined' || currentLang === 'vi') return defaultText;
  if (typeof STORY_TRANSLATIONS !== 'undefined' && STORY_TRANSLATIONS[currentLang]) {
    const nodeTrans = STORY_TRANSLATIONS[currentLang][nodeId];
    if (nodeTrans && nodeTrans.lines && nodeTrans.lines[lineIndex]) {
      return nodeTrans.lines[lineIndex];
    }
  }
  return defaultText;
}

function getLocalizedChoiceText(nodeId, choiceIndex, defaultText) {
  if (typeof currentLang === 'undefined' || currentLang === 'vi') return defaultText;
  if (typeof STORY_TRANSLATIONS !== 'undefined' && STORY_TRANSLATIONS[currentLang]) {
    const nodeTrans = STORY_TRANSLATIONS[currentLang][nodeId];
    if (nodeTrans && nodeTrans.choices && nodeTrans.choices[choiceIndex]) {
      return nodeTrans.choices[choiceIndex];
    }
  }
  return defaultText;
}

function getLocalizedChapter(nodeId, defaultChap) {
  if (typeof currentLang === 'undefined' || currentLang === 'vi') return defaultChap;
  if (typeof STORY_TRANSLATIONS !== 'undefined' && STORY_TRANSLATIONS[currentLang]) {
    const nodeTrans = STORY_TRANSLATIONS[currentLang][nodeId];
    if (nodeTrans && nodeTrans.chapter) return nodeTrans.chapter;
  }
  return defaultChap;
}

function getLocalizedEnding(node) {
  if (typeof currentLang === 'undefined' || currentLang === 'vi') return { title: node.title, desc: node.desc };
  if (typeof STORY_TRANSLATIONS !== 'undefined' && STORY_TRANSLATIONS[currentLang]) {
    const nodeTrans = STORY_TRANSLATIONS[currentLang][state.node];
    if (nodeTrans && nodeTrans.ending) {
      return { title: nodeTrans.ending.title || node.title, desc: nodeTrans.ending.desc || node.desc };
    }
  }
  return { title: node.title, desc: node.desc };
}

function getLocalizedEndingTitle(key, defaultTitle) {
  if (typeof currentLang === 'undefined' || currentLang === 'vi') return defaultTitle;
  if (typeof STORY_TRANSLATIONS !== 'undefined' && STORY_TRANSLATIONS[currentLang]) {
    const nodeTrans = STORY_TRANSLATIONS[currentLang]['ending_' + key] || STORY_TRANSLATIONS[currentLang][key];
    if (nodeTrans && nodeTrans.ending && nodeTrans.ending.title) return nodeTrans.ending.title;
  }
  return defaultTitle;
}

function getLocalizedEndingDesc(key, defaultDesc) {
  if (typeof currentLang === 'undefined' || currentLang === 'vi') return defaultDesc;
  if (typeof STORY_TRANSLATIONS !== 'undefined' && STORY_TRANSLATIONS[currentLang]) {
    const nodeTrans = STORY_TRANSLATIONS[currentLang]['ending_' + key] || STORY_TRANSLATIONS[currentLang][key];
    if (nodeTrans && nodeTrans.ending && nodeTrans.ending.desc) return nodeTrans.ending.desc;
  }
  return defaultDesc;
}

// =============================================
//  GAME FLOW & NODE LOADER
// =============================================

function startGame() {
  initAudio();
  sfxClick();
  switchBgm('spring');

  state.node = 'intro';
  state.lineIndex = 0;
  state.affection = { hana: 0, yuki: 0, rin: 0 };
  state.isTyping = false;
  state.isAuto = false;
  state.isSkip = false;
  state.backlog = [];
  updateAffectionUI();
  updateModeButtons();

  const title = document.getElementById('title-screen');
  title.classList.add('fade-out');

  setTimeout(() => {
    title.style.display = 'none';
    document.getElementById('game').style.display = 'flex';
    loadNode(state.node);
  }, 750);
}

function returnToTitle() {
  initAudio();
  sfxClick();
  if (typeof switchBgm === 'function') switchBgm(null);
  currentBgmTheme = null;
  state.isAuto = false;
  state.isSkip = false;
  updateModeButtons();

  document.getElementById('game').style.display = 'none';
  document.getElementById('ending-screen').classList.remove('active');

  updateTrophyCount();
  const title = document.getElementById('title-screen');
  title.style.display = 'flex';
  title.classList.remove('fade-out');
}

function fadeTransition(fn) {
  const overlay = document.getElementById('fade-screen');
  overlay.classList.add('active');
  setTimeout(() => {
    fn();
    overlay.classList.remove('active');
  }, 450);
}

function showChapterBanner(chap) {
  const banner = document.getElementById('chapter-banner');
  const locChap = getLocalizedChapter(state.node, chap);
  document.getElementById('chap-title').textContent = locChap.title;
  document.getElementById('chap-subtitle').textContent = locChap.subtitle;
  banner.classList.add('active');
  clearTimeout(chapterTimer);
  chapterTimer = setTimeout(() => {
    banner.classList.remove('active');
  }, 2600);
}

function loadNode(nodeId) {
  const node = STORY[nodeId];
  if (!node) return;

  state.node = nodeId;
  state.lineIndex = 0;

  if (node.type === 'ending') {
    showEnding(node);
    return;
  }

  if (node.chapter) {
    showChapterBanner(node.chapter);
  }

  if (node.bgmTheme) {
    switchBgm(node.bgmTheme);
  }

  fadeTransition(() => {
    // 1. Background
    if (node.bg && ASSETS.bg[node.bg]) {
      const bgLayer = document.getElementById('bg-layer');
      bgLayer.style.backgroundImage = `url('${ASSETS.bg[node.bg]}')`;
    }

    // 2. Characters
    if (node.hideChar) {
      document.querySelectorAll('.char-container').forEach(c => {
        c.classList.remove('visible');
        c.classList.add('hidden');
      });
    }

    if (node.showChar) {
      document.querySelectorAll('.char-container').forEach(c => {
        c.classList.remove('visible');
        c.classList.add('hidden');
      });

      const charInfo = CHAR_INFO[node.showChar];
      if (charInfo && charInfo.sprite) {
        const charEl = document.getElementById(charInfo.sprite);
        if (charEl) {
          charEl.classList.remove('hidden');
          charEl.classList.add('visible');

          const imgEl = charEl.querySelector('.char-img');
          if (imgEl) {
            const defaultExpr = node.showChar + '_normal';
            const exprKey = (node.charExpr && ASSETS.char[node.charExpr]) ? node.charExpr : defaultExpr;
            if (ASSETS.char[exprKey]) imgEl.src = ASSETS.char[exprKey];
          }
        }
      }
    }

    // 3. Choices node or Dialogue
    if (node.choices) {
      state.isAuto = false;
      state.isSkip = false;
      updateModeButtons();
      showChoices(node.choices);
    } else {
      document.getElementById('choices-overlay').classList.add('hidden');
      showNextLine();
    }
  });
}

// =============================================
//  DIALOGUE & TYPEWRITER ENGINE
// =============================================

function showNextLine() {
  const node = STORY[state.node];
  if (!node || !node.lines) return;

  if (state.lineIndex >= node.lines.length) {
    if (node.next) {
      setTimeout(() => loadNode(node.next), state.isSkip ? 50 : 150);
    }
    return;
  }

  const line = node.lines[state.lineIndex];
  const char = CHAR_INFO[line.speaker] || CHAR_INFO.narrator;
  const speakerName = getLocalizedSpeaker(line.speaker, char.name);
  const localizedText = getLocalizedLineText(state.node, state.lineIndex, line.text);

  // Add to backlog
  state.backlog.push({ speaker: speakerName, text: localizedText, icon: char.icon });

  // Update Name Tag & Avatar
  document.getElementById('name-icon').textContent = char.icon || '💬';
  document.getElementById('name-text').textContent = speakerName;

  const avatarCont = document.getElementById('dialogue-avatar-container');
  const avatarImg = document.getElementById('dialogue-avatar');

  if (char.avatar) {
    let aSrc = char.avatar;
    const currentNode = STORY[state.node];
    const expr = (currentNode && currentNode.charExpr) || '';
    if (line.speaker === 'hana') {
      if (expr === 'hana_smile' || line.bounce) aSrc = char.avatarSmile || aSrc;
      else if (expr === 'hana_sad') aSrc = char.avatarSad || aSrc;
      else if (expr === 'hana_blush') aSrc = char.avatarBlush || aSrc;
    } else if (line.speaker === 'yuki') {
      if (expr === 'yuki_smile') aSrc = char.avatarSmile || aSrc;
      else if (expr === 'yuki_sad') aSrc = char.avatarSad || aSrc;
    } else if (line.speaker === 'rin') {
      if (expr === 'rin_smile') aSrc = char.avatarSmile || aSrc;
      else if (expr === 'rin_blush' || line.shake) aSrc = char.avatarBlush || aSrc;
    }
    avatarImg.src = aSrc;
    avatarCont.style.display = 'flex';
    avatarCont.style.borderColor = char.color || '#f472b6';
    avatarCont.style.boxShadow = `0 0 16px ${char.color || '#f472b6'}77`;
  } else {
    avatarCont.style.display = 'none';
  }

  if (line.bounce) {
    const charEl = document.querySelector('.char-container.visible');
    if (charEl) {
      charEl.classList.add('char-bounce');
      setTimeout(() => charEl.classList.remove('char-bounce'), 500);
    }
  }

  if (line.shake || (line.speaker === 'rin' && line.text.includes('!'))) {
    const gameEl = document.getElementById('game');
    gameEl.classList.add('screen-shake');
    setTimeout(() => gameEl.classList.remove('screen-shake'), 420);
  }

  typeWriter(localizedText);
  state.lineIndex++;
}

function typeWriter(fullText) {
  const textEl = document.getElementById('dialogue-text');
  textEl.textContent = '';
  state.isTyping = true;
  let idx = 0;

  const activeChar = document.querySelector('.char-container.visible');
  if (activeChar) activeChar.classList.add('talking');

  clearTimeout(autoTimer);
  clearInterval(typewriterTimer);

  const speed = state.isSkip ? 4 : state.cfg.textSpeed;

  typewriterTimer = setInterval(() => {
    textEl.textContent += fullText[idx];
    if (idx % 2 === 0) sfxType();
    idx++;

    if (idx >= fullText.length) {
      clearInterval(typewriterTimer);
      state.isTyping = false;
      document.querySelectorAll('.char-container').forEach(c => c.classList.remove('talking'));
      handleLineComplete();
    }
  }, speed);
}

function handleLineComplete() {
  document.querySelectorAll('.char-container').forEach(c => c.classList.remove('talking'));
  if (state.isSkip) {
    setTimeout(advanceDialogue, 80);
  } else if (state.isAuto) {
    clearTimeout(autoTimer);
    autoTimer = setTimeout(advanceDialogue, state.cfg.autoDelay);
  }
}

function advanceDialogue() {
  const choices = document.getElementById('choices-overlay');
  if (!choices.classList.contains('hidden')) return;

  initAudio();

  // If currently typing, finish line instantly
  if (state.isTyping) {
    clearInterval(typewriterTimer);
    state.isTyping = false;
    document.querySelectorAll('.char-container').forEach(c => c.classList.remove('talking'));
    const node = STORY[state.node];
    if (node && node.lines && node.lines[state.lineIndex - 1]) {
      document.getElementById('dialogue-text').textContent = node.lines[state.lineIndex - 1].text;
    }
    handleLineComplete();
    return;
  }

  sfxClick();
  showNextLine();
}

function onSceneClick(e) {
  if (state.isUIHidden) {
    toggleHideUI();
  }
}

// =============================================
//  CHOICES & MULTI-HEROINE AFFECTION
// =============================================

function showChoices(choices) {
  const overlay = document.getElementById('choices-overlay');
  const container = document.getElementById('choices-container');
  container.innerHTML = '';

  choices.forEach((choice, idx) => {
    const choiceText = getLocalizedChoiceText(state.node, idx, choice.text);
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span style="color:#f472b6; font-size:18px;">◈</span> <span>${choiceText}</span>`;
    btn.onclick = () => selectChoice(choice);
    container.appendChild(btn);
  });

  overlay.classList.remove('hidden');
}

function selectChoice(choice) {
  sfxChoice();
  document.getElementById('choices-overlay').classList.add('hidden');

  let gainedAny = false;
  let toastMsg = [];

  if (choice.effect) {
    ['hana', 'yuki', 'rin'].forEach(k => {
      if (typeof choice.effect[k] === 'number' && choice.effect[k] !== 0) {
        state.affection[k] = (state.affection[k] || 0) + choice.effect[k];
        gainedAny = true;
        const icon = CHAR_INFO[k] ? CHAR_INFO[k].icon : '💖';
        toastMsg.push(`${icon} ${CHAR_INFO[k].name}: +${choice.effect[k]}`);
      }
    });

    // Backward compatibility for single affection
    if (typeof choice.effect.affection === 'number' && choice.effect.affection !== 0) {
      state.affection.hana = (state.affection.hana || 0) + choice.effect.affection;
      gainedAny = true;
      toastMsg.push(`🌸 Sakura Hana: +${choice.effect.affection}`);
    }
  }

  if (gainedAny) {
    updateAffectionUI();
    sfxHeart();
    showToast(toastMsg.join(' | '));
  }

  let targetNode = choice.next;
  // Check hero affection requirement
  if (choice.requireAffectionHero && choice.minVal) {
    const curVal = state.affection[choice.requireAffectionHero] || 0;
    if (curVal < choice.minVal) {
      targetNode = choice.failNext || choice.next;
    }
  }

  setTimeout(() => loadNode(targetNode), 250);
}

function updateAffectionUI() {
  document.getElementById('aff-val-hana').textContent = state.affection.hana || 0;
  document.getElementById('aff-val-yuki').textContent = state.affection.yuki || 0;
  document.getElementById('aff-val-rin').textContent  = state.affection.rin || 0;
}

// =============================================
//  MODE TOGGLES: AUTO, SKIP, HIDE UI
// =============================================

function toggleAuto() {
  initAudio();
  sfxClick();
  state.isAuto = !state.isAuto;
  if (state.isAuto) state.isSkip = false;
  updateModeButtons();

  if (state.isAuto && !state.isTyping) {
    advanceDialogue();
  }
}

function toggleSkip() {
  initAudio();
  sfxClick();
  state.isSkip = !state.isSkip;
  if (state.isSkip) state.isAuto = false;
  updateModeButtons();

  if (state.isSkip) {
    advanceDialogue();
  }
}

function updateModeButtons() {
  const autoBtn = document.getElementById('auto-btn');
  const skipBtn = document.getElementById('skip-btn');
  const subAutoBtn = document.getElementById('sub-auto-btn');
  const subSkipBtn = document.getElementById('sub-skip-btn');

  if (state.isAuto) {
    autoBtn.classList.add('active');
    subAutoBtn.classList.add('active');
  } else {
    autoBtn.classList.remove('active');
    subAutoBtn.classList.remove('active');
  }

  if (state.isSkip) {
    skipBtn.classList.add('active');
    subSkipBtn.classList.add('active');
  } else {
    skipBtn.classList.remove('active');
    subSkipBtn.classList.remove('active');
  }
}

function toggleHideUI(e) {
  if (e) e.preventDefault();
  state.isUIHidden = !state.isUIHidden;

  const dLayer = document.getElementById('dialogue-layer');
  const tBar = document.getElementById('top-bar');
  const hint = document.getElementById('unhide-hint');

  if (state.isUIHidden) {
    dLayer.classList.add('hidden-ui');
    tBar.style.opacity = '0';
    tBar.style.pointerEvents = 'none';
    hint.style.display = 'block';
  } else {
    dLayer.classList.remove('hidden-ui');
    tBar.style.opacity = '1';
    tBar.style.pointerEvents = 'auto';
    hint.style.display = 'none';
  }
}

// =============================================
//  BACKLOG (HISTORY) SYSTEM
// =============================================

function openBacklog() {
  initAudio();
  sfxClick();
  const listEl = document.getElementById('backlog-list');
  listEl.innerHTML = '';

  if (state.backlog.length === 0) {
    listEl.innerHTML = '<div style="text-align:center; color:#9ca3af; margin-top:40px;">Chưa có hội thoại nào được ghi nhận.</div>';
  } else {
    state.backlog.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'log-item';
      itemDiv.innerHTML = `
        <div class="log-speaker">${item.icon} ${item.speaker}</div>
        <div class="log-text">${item.text}</div>
      `;
      listEl.appendChild(itemDiv);
    });
  }

  document.getElementById('backlog-modal').classList.remove('hidden');
  setTimeout(() => listEl.scrollTop = listEl.scrollHeight, 50);
}

function closeBacklog() {
  sfxClick();
  document.getElementById('backlog-modal').classList.add('hidden');
}

// =============================================
//  SETTINGS / CONFIG SYSTEM
// =============================================

function openSettings() {
  initAudio();
  sfxClick();
  document.getElementById('cfg-speed').value = 52 - state.cfg.textSpeed;
  document.getElementById('cfg-auto-delay').value = state.cfg.autoDelay;
  document.getElementById('cfg-bgm').value = Math.round(state.cfg.bgmVol * 100);
  document.getElementById('cfg-sfx').value = Math.round(state.cfg.sfxVol * 100);

  document.getElementById('settings-modal').classList.remove('hidden');
}

function closeSettings() {
  sfxClick();
  document.getElementById('settings-modal').classList.add('hidden');
  try {
    localStorage.setItem('hana_vn_cfg', JSON.stringify(state.cfg));
  } catch (e) {}
}

function updateSettings() {
  state.cfg.textSpeed = 52 - parseInt(document.getElementById('cfg-speed').value);
  state.cfg.autoDelay = parseInt(document.getElementById('cfg-auto-delay').value);
  state.cfg.bgmVol = parseInt(document.getElementById('cfg-bgm').value) / 100;
  state.cfg.sfxVol = parseInt(document.getElementById('cfg-sfx').value) / 100;

  if (bgmGainNode && audioCtx) {
    bgmGainNode.gain.setValueAtTime(state.cfg.bgmVol, audioCtx.currentTime);
  }
  if (typeof currentHtmlAudio !== 'undefined' && currentHtmlAudio) {
    currentHtmlAudio.volume = state.cfg.bgmVol;
  }
}

function resetAllData() {
  if (confirm('Bạn có chắc chắn muốn xóa toàn bộ file save và thành tích không?')) {
    localStorage.removeItem('hana_vn_save_v2');
    localStorage.removeItem('hana_vn_endings');
    localStorage.removeItem('hana_vn_qsave');
    state.saves = {};
    state.unlockedEndings = {};
    updateTrophyCount();
    closeSettings();
    showToast('🗑️ Đã đặt lại toàn bộ dữ liệu!');
  }
}

// =============================================
//  QUICK SAVE & QUICK LOAD
// =============================================

function quickSave() {
  initAudio();
  sfxClick();
  const qData = {
    node: state.node,
    lineIndex: state.lineIndex,
    affection: { ...state.affection },
    timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
  };
  localStorage.setItem('hana_vn_qsave', JSON.stringify(qData));
  showToast('⚡ Quick Save thành công!');
}

function quickLoad() {
  initAudio();
  sfxClick();
  const qRaw = localStorage.getItem('hana_vn_qsave');
  if (!qRaw) {
    showToast('⚠️ Không tìm thấy bản Quick Save!');
    return;
  }
  const qData = JSON.parse(qRaw);
  state.node = qData.node;
  state.lineIndex = qData.lineIndex;
  state.affection = { ...qData.affection };
  updateAffectionUI();

  document.getElementById('game').style.display = 'flex';
  document.getElementById('title-screen').style.display = 'none';
  loadNode(state.node);
  showToast('⚡ Quick Load thành công!');
}

// =============================================
//  SLOT SAVE & LOAD MODAL
// =============================================

let modalMode = 'save';

function openModal(mode) {
  initAudio();
  sfxClick();
  modalMode = mode;
  document.getElementById('modal-title').textContent = mode === 'save' ? '💾 Lưu Game' : '📂 Tải Game';

  const container = document.getElementById('slots-container');
  container.innerHTML = '';

  for (let slot = 1; slot <= 4; slot++) {
    const save = state.saves[slot];
    const div = document.createElement('div');
    div.className = 'slot-item';

    if (save) {
      div.innerHTML = `
        <div>
          <div style="font-weight:700; color:#fbcfe8;">Ô 0${slot}: ${save.nodeTitle || save.node}</div>
          <div style="font-size:12px; color:#d8b4fe;">🌸 ${save.affection ? save.affection.hana : 0} | ❄️ ${save.affection ? save.affection.yuki : 0} | ⚡ ${save.affection ? save.affection.rin : 0} • ${save.date}</div>
        </div>
        <button class="nav-btn" style="padding: 5px 14px;" onclick="${mode === 'save' ? `saveSlot(${slot})` : `loadSlot(${slot})`}">${mode === 'save' ? 'Ghi Đè' : 'Tải'}</button>
      `;
    } else {
      div.innerHTML = `
        <div style="color: #9ca3af; font-size:14px;">Ô 0${slot}: Trống</div>
        ${mode === 'save' ? `<button class="nav-btn" style="padding: 5px 14px;" onclick="saveSlot(${slot})">Lưu Vào</button>` : `<span style="font-size:12px; color:#6b7280;">Không có dữ liệu</span>`}
      `;
    }
    container.appendChild(div);
  }

  document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
  sfxClick();
  document.getElementById('modal-overlay').classList.add('hidden');
}

function saveSlot(slot) {
  const node = STORY[state.node];
  state.saves[slot] = {
    node: state.node,
    lineIndex: state.lineIndex,
    affection: { ...state.affection },
    nodeTitle: node && node.chapter ? node.chapter.title : (node && node.bg ? node.bg : state.node),
    date: new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
  };

  try {
    localStorage.setItem('hana_vn_save_v2', JSON.stringify(state.saves));
  } catch (e) {}

  showToast(`💾 Đã lưu vào Ô 0${slot}!`);
  openModal(modalMode);
}

function loadSlot(slot) {
  const save = state.saves[slot];
  if (!save) {
    showToast('⚠️ Ô này chưa có dữ liệu lưu!');
    return;
  }

  state.node = save.node;
  state.lineIndex = save.lineIndex;
  state.affection = save.affection && typeof save.affection === 'object' ? { ...save.affection } : { hana: save.affection || 0, yuki: 0, rin: 0 };
  updateAffectionUI();

  document.getElementById('game').style.display = 'flex';
  document.getElementById('title-screen').style.display = 'none';

  closeModal();
  loadNode(state.node);
  showToast(`📂 Đã tải Ô 0${slot}!`);
}

// =============================================
//  ENDINGS & TROPHY GALLERY (8 ENDINGS)
// =============================================

function showEnding(node) {
  document.getElementById('game').style.display = 'none';

  if (node.endingKey) {
    state.unlockedEndings[node.endingKey] = true;
    try {
      localStorage.setItem('hana_vn_endings', JSON.stringify(state.unlockedEndings));
    } catch (e) {}
    updateTrophyCount();
  }

  // Showcase heroine sprite and background
  const showcaseMap = {
    hana_good:   { sprite: 'assets/char/hana_blush.webp', bg: 'assets/bg/school_gate.webp', bgm: 'romance' },
    hana_normal: { sprite: 'assets/char/hana_smile.webp', bg: 'assets/bg/classroom.webp', bgm: 'spring' },
    yuki_good:   { sprite: 'assets/char/yuki_smile.webp', bg: 'assets/bg/rooftop_sunset.webp', bgm: 'romance' },
    yuki_normal: { sprite: 'assets/char/yuki_normal.webp', bg: 'assets/bg/rooftop_sunset.webp', bgm: 'sunset' },
    rin_good:    { sprite: 'assets/char/rin_blush.webp', bg: 'assets/bg/student_council.webp', bgm: 'romance' },
    rin_normal:  { sprite: 'assets/char/rin_smile.webp', bg: 'assets/bg/student_council.webp', bgm: 'tsundere' },
    harem:       { sprite: 'assets/char/hana_smile.webp', bg: 'assets/bg/school_gate.webp', bgm: 'spring' },
    alone:       { sprite: null, bg: 'assets/bg/corridor.jpg', bgm: 'sunset' }
  };

  const meta = showcaseMap[node.endingKey] || { sprite: 'assets/char/hana_smile.webp', bg: 'assets/bg/school_gate.webp', bgm: 'romance' };
  
  if (meta.bgm && typeof switchBgm === 'function') {
    switchBgm(meta.bgm);
  }

  const bgEl = document.getElementById('ending-bg-layer');
  if (bgEl) bgEl.style.backgroundImage = `url('${meta.bg}')`;

  const showcaseEl = document.getElementById('ending-char-showcase');
  const imgEl = document.getElementById('ending-char-img');
  if (showcaseEl && imgEl) {
    if (meta.sprite) {
      imgEl.src = meta.sprite;
      showcaseEl.style.display = 'flex';
    } else {
      showcaseEl.style.display = 'none';
    }
  }

  const locEnding = getLocalizedEnding(node);
  const endScreen = document.getElementById('ending-screen');
  document.getElementById('ending-badge').textContent = node.badge || '🌸';
  document.getElementById('ending-title').textContent = locEnding.title;
  document.getElementById('ending-desc').textContent = locEnding.desc;
  document.getElementById('ending-hearts').textContent = node.hearts;

  endScreen.classList.add('active');
}

// =============================================
//  LOCALIZATION ENGINE (VI / EN / JA)
// =============================================

var currentLang = 'vi';

const I18N = {
  vi: {
    code: 'vi',
    lang: '🌐 VI',
    langFull: '🌐 Tiếng Việt',
    toastSwitch: '🇻🇳 Đã chuyển sang Tiếng Việt',
    start: 'Bắt Đầu Game',
    load: 'Tải Game',
    gallery: 'Bộ Sưu Tập Ending',
    music: 'Phòng Nghe Nhạc',
    settings: 'Cài Đặt',
    backlog: '📜 Lịch Sử',
    auto: '⚡ Tự Động',
    stopAuto: '⚡ Dừng Auto',
    skip: '⏩ Bỏ Qua',
    stopSkip: '⏩ Dừng Skip',
    menu: '🏠 Menu',
    hideUI: 'Ẩn UI',
    clickContinue: 'Click để tiếp tục',
    choiceHeader: '— Lựa Chọn Của Bạn —',
    trophyText: (count) => `🏆 Đã mở: ${count}/8 Kết Thúc`,
    returnTitle: 'Về Màn Hình Chính'
  },
  en: {
    code: 'en',
    lang: '🌐 EN',
    langFull: '🌐 English',
    toastSwitch: '🇬🇧 Switched to English UI',
    start: 'Start Game',
    load: 'Load Game',
    gallery: 'Endings Gallery',
    music: 'Music Room',
    settings: 'Settings',
    backlog: '📜 History',
    auto: '⚡ Auto',
    stopAuto: '⚡ Stop Auto',
    skip: '⏩ Skip',
    stopSkip: '⏩ Stop Skip',
    menu: '🏠 Title',
    hideUI: 'Hide UI',
    clickContinue: 'Click to continue',
    choiceHeader: '— Make Your Choice —',
    trophyText: (count) => `🏆 Unlocked: ${count}/8 Endings`,
    returnTitle: 'Return to Title'
  },
  ja: {
    code: 'ja',
    lang: '🌐 JA',
    langFull: '🌐 日本語',
    toastSwitch: '🇯🇵 日本語UIに切り替えました',
    start: 'ゲーム開始',
    load: 'ロード',
    gallery: 'エンディング一覧',
    music: '音楽鑑賞',
    settings: '設定',
    backlog: '📜 履歴',
    auto: '⚡ オート',
    stopAuto: '⚡ 停止',
    skip: '⏩ スキップ',
    stopSkip: '⏩ 停止',
    menu: '🏠 タイトル',
    hideUI: 'UI非表示',
    clickContinue: 'クリックで進む',
    choiceHeader: '— 選択肢 —',
    trophyText: (count) => `🏆 解放済み: ${count}/8 エンディング`,
    returnTitle: 'タイトルへ戻る'
  }
};


function updateTrophyCount() {
  const count = Object.keys(state.unlockedEndings).length;
  const badgeEl = document.getElementById('title-trophy');
  const dict = (typeof I18N !== 'undefined' && typeof currentLang !== 'undefined' && I18N[currentLang]) ? I18N[currentLang] : null;
  if (badgeEl) {
    badgeEl.textContent = dict && typeof dict.trophyText === 'function' ? dict.trophyText(count) : `🏆 Đã mở: ${count}/8 Kết Thúc`;
  }
}

function showGallery() {
  initAudio();
  sfxClick();
  const list = document.getElementById('gallery-list');
  list.innerHTML = '';

  const endingsMeta = [
    { key: 'hana_good',   title: '🌸 True Ending: Dấu Ấn Hoa Anh Đào', desc: 'Thành đôi cùng Sakura Hana dưới cơn mưa hoa anh đào ngập tràn nắng xuân.' },
    { key: 'hana_normal', title: '🌸 Normal Ending: Bạn Cùng Bàn Tuyệt Nhất', desc: 'Gắn bó keo sơn với Hana với tư cách người bạn cùng bàn tri kỷ.' },
    { key: 'yuki_good',   title: '❄️ True Ending: Bản Tình Ca Tuyết Trắng Hoàng Hôn', desc: 'Sưởi ấm trái tim cô đơn của Aoki Yuki nơi sân thượng lộng gió.' },
    { key: 'yuki_normal', title: '❄️ Normal Ending: Tri Kỷ Sân Thượng', desc: 'Người bạn tâm giao cùng Yuki ngắm trọn vòm trời thành phố.' },
    { key: 'rin_good',    title: '⚡ True Ending: Trái Tim Ngượng Ngùng Của Hội Trưởng', desc: 'Chạm tới trái tim ấm áp đằng sau vẻ ngoài Tsundere của Tachibana Rin.' },
    { key: 'rin_normal',  title: '⚡ Normal Ending: Cánh Tay Đắc Lực', desc: 'Trở thành cộng sự tin cậy nhất của Hội Trưởng Tachibana Rin.' },
    { key: 'harem',       title: '✨ Special Ending: Vườn Hoa Tuổi Thanh Xuân', desc: 'Giữ trọn tình bạn và kỷ niệm tuyệt đẹp cùng cả ba cô gái.' },
    { key: 'alone',       title: '🌧️ Sad Ending: Cánh Hoa Tàn Rơi', desc: 'Mùa hoa qua đi, để lại nỗi tiếc nuối khi không mở lòng với bất kỳ ai.' },
  ];

  endingsMeta.forEach(meta => {
    const isUnlocked = !!state.unlockedEndings[meta.key];
    const locTitle = getLocalizedEndingTitle(meta.key, meta.title);
    const locDesc = getLocalizedEndingDesc(meta.key, meta.desc);
    const lockedPrompt = currentLang === 'ja' ? '異なる選択肢を選んで、このエンディングを解放しましょう。' : (currentLang === 'en' ? 'Try different choices to unlock this ending.' : 'Hãy thử các nhánh lựa chọn khác nhau để khám phá kết thúc này.');
    const row = document.createElement('div');
    row.style.cssText = `background: ${isUnlocked ? 'rgba(147, 51, 234, 0.25)' : 'rgba(20, 10, 35, 0.4)'}; border: 1px solid ${isUnlocked ? '#ec4899' : 'rgba(216,180,254,0.15)'}; border-radius: 12px; padding: 12px 16px;`;
    row.innerHTML = `
      <div style="font-weight:700; font-size:14.5px; color:${isUnlocked ? '#fbcfe8' : '#6b7280'};">${isUnlocked ? '🔓 ' + locTitle : '🔒 ??? (' + (currentLang === 'ja' ? '未解放' : (currentLang === 'en' ? 'Locked' : 'Chưa mở khóa')) + ')'}</div>
      <div style="font-size:12px; color:${isUnlocked ? '#d8b4fe' : '#4b5563'}; margin-top:4px;">${isUnlocked ? locDesc : lockedPrompt}</div>
    `;
    list.appendChild(row);
  });

  document.getElementById('gallery-modal').classList.remove('hidden');
}

function closeGallery() {
  sfxClick();
  document.getElementById('gallery-modal').classList.add('hidden');
}

// =============================================
//  TOAST HELPER & STORAGE INIT
// =============================================

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

try {
  const savedSaves = localStorage.getItem('hana_vn_save_v2');
  if (savedSaves) state.saves = JSON.parse(savedSaves);

  const savedEndings = localStorage.getItem('hana_vn_endings');
  if (savedEndings) state.unlockedEndings = JSON.parse(savedEndings);

  const savedCfg = localStorage.getItem('hana_vn_cfg');
  if (savedCfg) Object.assign(state.cfg, JSON.parse(savedCfg));

  const savedLang = localStorage.getItem('hana_vn_lang');
  if (savedLang && typeof I18N !== 'undefined' && I18N[savedLang]) currentLang = savedLang;
} catch (e) {}

updateTrophyCount();
if (typeof applyLanguage === 'function') applyLanguage();

// =============================================
//  MUSIC ROOM (PHÒNG NGHE NHẠC)
// =============================================

const MUSIC_TRACKS = [
  { key: 'spring',   title: '🌸 Haru no Ibuki (Hơi Thở Mùa Xuân)', desc: 'Nhạc nền chủ đề trường Hanazono trong nắng sớm mùa xuân', file: 'assets/audio/bgm/spring.mp3', duration: '03:15' },
  { key: 'tsundere', title: '⚡ Sunao ni Narenakute (Trái Tim Tsundere)', desc: 'Giai điệu acoustic tinh nghịch & cá tính của Tachibana Rin', file: 'assets/audio/bgm/tsundere.mp3', duration: '02:45' },
  { key: 'sunset',   title: '❄️ Tasogare no Uta (Khúc Ca Hoàng Hôn)', desc: 'Hòa tấu piano u sầu & lắng đọng nơi sân thượng cùng Aoki Yuki', file: 'assets/audio/bgm/sunset.mp3', duration: '00:48' },
  { key: 'romance',  title: '💖 Sakura no Kiseki (Lời Hẹn Ước Mùa Hoa)', desc: 'Bản tình ca piano cao trào dành cho các phân đoạn True Ending', file: 'assets/audio/bgm/romance.mp3', duration: '00:48' },
];

let musicRoomPlaying = false;
let musicRoomCurrentKey = null;

function openMusicRoom() {
  initAudio();
  sfxClick();
  const listEl = document.getElementById('music-track-list');
  listEl.innerHTML = '';

  MUSIC_TRACKS.forEach((track) => {
    const item = document.createElement('div');
    item.className = 'slot-item';
    item.style.cursor = 'pointer';
    item.innerHTML = `
      <div style="flex:1;">
        <div style="font-weight:700; color:#fbcfe8; font-size:14.5px;">${track.title}</div>
        <div style="font-size:12px; color:#d8b4fe; margin-top:2px;">${track.desc} • <span style="color:#f472b6;">${track.duration}</span></div>
      </div>
      <button class="nav-btn" style="padding:6px 16px;" onclick="event.stopPropagation(); playMusicRoomTrack('${track.key}')">▶️ Phát</button>
    `;
    item.onclick = () => playMusicRoomTrack(track.key);
    listEl.appendChild(item);
  });

  document.getElementById('music-modal').classList.remove('hidden');
}

function closeMusicRoom() {
  sfxClick();
  document.getElementById('music-modal').classList.add('hidden');
}

function playMusicRoomTrack(key) {
  musicRoomCurrentKey = key;
  musicRoomPlaying = true;
  switchBgm(key);

  const track = MUSIC_TRACKS.find(t => t.key === key);
  const titleEl = document.getElementById('music-current-title');
  if (titleEl && track) titleEl.textContent = track.title;

  const btn = document.getElementById('music-play-pause-btn');
  if (btn) btn.textContent = '⏸️ Tạm Dừng';

  const disc = document.getElementById('vinyl-disc');
  if (disc) disc.classList.remove('vinyl-paused');
}

function toggleMusicRoomPlayback() {
  const btn = document.getElementById('music-play-pause-btn');
  const disc = document.getElementById('vinyl-disc');

  if (musicRoomPlaying) {
    if (typeof currentHtmlAudio !== 'undefined' && currentHtmlAudio) {
      currentHtmlAudio.pause();
    }
    musicRoomPlaying = false;
    if (btn) btn.textContent = '▶️ Tiếp Tục';
    if (disc) disc.classList.add('vinyl-paused');
  } else {
    if (typeof currentHtmlAudio !== 'undefined' && currentHtmlAudio) {
      currentHtmlAudio.play();
    } else if (musicRoomCurrentKey) {
      switchBgm(musicRoomCurrentKey);
    } else {
      playMusicRoomTrack('spring');
    }
    musicRoomPlaying = true;
    if (btn) btn.textContent = '⏸️ Tạm Dừng';
    if (disc) disc.classList.remove('vinyl-paused');
  }
}

function toggleLanguage() {
  initAudio();
  sfxClick();
  if (currentLang === 'vi') currentLang = 'en';
  else if (currentLang === 'en') currentLang = 'ja';
  else currentLang = 'vi';

  applyLanguage();
  try {
    localStorage.setItem('hana_vn_lang', currentLang);
  } catch (e) {}
  showToast(I18N[currentLang].toastSwitch);
}

function applyLanguage() {
  const dict = I18N[currentLang];
  
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.textContent = dict.lang;

  const titleLangBtn = document.getElementById('title-lang-btn');
  if (titleLangBtn) titleLangBtn.textContent = dict.langFull;

  const txtStart = document.getElementById('txt-start');
  if (txtStart) txtStart.textContent = dict.start;

  const txtLoad = document.getElementById('txt-load');
  if (txtLoad) txtLoad.textContent = dict.load;

  const txtGallery = document.getElementById('txt-gallery');
  if (txtGallery) txtGallery.textContent = dict.gallery;

  const txtMusic = document.getElementById('txt-music');
  if (txtMusic) txtMusic.textContent = dict.music;

  const txtSettings = document.getElementById('txt-settings');
  if (txtSettings) txtSettings.textContent = dict.settings;

  const btnAuto = document.getElementById('auto-btn');
  if (btnAuto) btnAuto.textContent = state.isAuto ? dict.stopAuto : dict.auto;

  const btnSkip = document.getElementById('skip-btn');
  if (btnSkip) btnSkip.textContent = state.isSkip ? dict.stopSkip : dict.skip;

  const btnBacklog = document.getElementById('nav-backlog');
  if (btnBacklog) btnBacklog.textContent = dict.backlog;

  const btnSettings = document.getElementById('nav-settings');
  if (btnSettings) btnSettings.textContent = dict.settings;

  const btnMenu = document.getElementById('nav-menu');
  if (btnMenu) btnMenu.textContent = dict.menu;

  const promptClick = document.getElementById('txt-prompt-click');
  if (promptClick) promptClick.textContent = dict.clickContinue;

  const choiceHdr = document.getElementById('txt-choice-header');
  if (choiceHdr) choiceHdr.textContent = dict.choiceHeader;

  const returnTitle = document.getElementById('txt-return-title');
  if (returnTitle) returnTitle.textContent = dict.returnTitle;

  const quickHide = document.getElementById('quick-hide-btn');
  if (quickHide) quickHide.textContent = dict.hideUI;

  updateTrophyCount();

  // If in game, dynamically refresh current dialogue line / choices in the new language!
  if (document.getElementById('game').style.display !== 'none' && !state.isTyping) {
    const node = STORY[state.node];
    if (node) {
      if (node.choices && !document.getElementById('choices-overlay').classList.contains('hidden')) {
        showChoices(node.choices);
      } else if (node.lines && state.lineIndex > 0) {
        const lineIdx = state.lineIndex - 1;
        const line = node.lines[lineIdx];
        if (line) {
          const char = CHAR_INFO[line.speaker] || CHAR_INFO.narrator;
          document.getElementById('name-text').textContent = getLocalizedSpeaker(line.speaker, char.name);
          document.getElementById('dialogue-text').textContent = getLocalizedLineText(state.node, lineIdx, line.text);
        }
      }
    }
  }
}

// =============================================
//  KEYBOARD SHORTCUTS
// =============================================

window.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Enter') {
    if (document.getElementById('game').style.display !== 'none' && !state.isUIHidden) {
      advanceDialogue();
    }
  } else if (e.key === 'Escape') {
    closeModal();
    closeBacklog();
    closeSettings();
    closeGallery();
    closeMusicRoom();
  } else if (e.key === 'a' || e.key === 'A') {
    if (document.getElementById('game').style.display !== 'none') toggleAuto();
  } else if (e.key === 's' || e.key === 'S') {
    if (document.getElementById('game').style.display !== 'none') toggleSkip();
  } else if (e.key === 'l' || e.key === 'L') {
    if (document.getElementById('game').style.display !== 'none') openBacklog();
  } else if (e.key === 'h' || e.key === 'H') {
    if (document.getElementById('game').style.display !== 'none') toggleHideUI();
  }
});

window.addEventListener('wheel', (e) => {
  if (document.getElementById('game').style.display !== 'none' && !state.isUIHidden) {
    if (e.deltaY < -40) {
      openBacklog();
    }
  }
});


// =============================================
//  MOBILE / TOUCH SUPPORT
// =============================================
(function setupTouch() {
  const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  if (!isTouch) return;

  const scene = document.getElementById('scene');
  const hint = document.getElementById('unhide-hint');
  const gameEl = document.getElementById('game');
  const inGame = () => gameEl.style.display !== 'none';
  let lastTouchAction = 0;

  // Chặn contextmenu (chuột phải mô phỏng) trùng với nhấn giữ để tránh bật/tắt UI 2 lần
  document.addEventListener('contextmenu', (e) => {
    if (Date.now() - lastTouchAction < 1000) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  if (hint) hint.textContent = 'Chạm vào màn hình để hiện UI';

  let startX = 0, startY = 0, startT = 0, pressTimer = null, moved = false;

  scene.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    if (e.target.closest('#choices-overlay:not(.hidden)')) return;
    const t = e.touches[0];
    startX = t.clientX; startY = t.clientY; startT = Date.now(); moved = false;
    clearTimeout(pressTimer);
    // Nhấn giữ ~0.6s để ẩn UI
    pressTimer = setTimeout(() => {
      if (!moved && inGame() && !state.isUIHidden) {
        lastTouchAction = Date.now();
        toggleHideUI();
      }
    }, 600);
  }, { passive: true });

  scene.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    if (Math.abs(t.clientX - startX) > 10 || Math.abs(t.clientY - startY) > 10) {
      moved = true;
      clearTimeout(pressTimer);
    }
  }, { passive: true });

  scene.addEventListener('touchend', (e) => {
    clearTimeout(pressTimer);
    const t = e.changedTouches[0];
    const dy = t.clientY - startY;
    const dx = Math.abs(t.clientX - startX);
    // Vuốt xuống trên cảnh để mở Lịch Sử
    if (inGame() && !state.isUIHidden && dy > 90 && dx < 60 && Date.now() - startT < 600) {
      if (!document.querySelector('#choices-overlay:not(.hidden)')) openBacklog();
    }
  }, { passive: true });
})();
