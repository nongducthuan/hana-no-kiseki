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
  document.getElementById('chap-title').textContent = chap.title;
  document.getElementById('chap-subtitle').textContent = chap.subtitle;
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

          if (node.charExpr && ASSETS.char[node.charExpr]) {
            const imgEl = charEl.querySelector('.char-img');
            if (imgEl) imgEl.src = ASSETS.char[node.charExpr];
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

  // Add to backlog
  state.backlog.push({ speaker: char.name, text: line.text, icon: char.icon });

  // Update Name Tag & Avatar
  document.getElementById('name-icon').textContent = char.icon || '💬';
  document.getElementById('name-text').textContent = char.name;

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

  typeWriter(line.text);
  state.lineIndex++;
}

function typeWriter(fullText) {
  const textEl = document.getElementById('dialogue-text');
  textEl.textContent = '';
  state.isTyping = true;
  let idx = 0;

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
      handleLineComplete();
    }
  }, speed);
}

function handleLineComplete() {
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

  choices.forEach((choice) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span style="color:#f472b6; font-size:18px;">◈</span> <span>${choice.text}</span>`;
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

  const endScreen = document.getElementById('ending-screen');
  document.getElementById('ending-badge').textContent = node.badge || '🌸';
  document.getElementById('ending-title').textContent = node.title;
  document.getElementById('ending-desc').textContent = node.desc;
  document.getElementById('ending-hearts').textContent = node.hearts;

  endScreen.classList.add('active');
}

function updateTrophyCount() {
  const count = Object.keys(state.unlockedEndings).length;
  const badgeEl = document.getElementById('title-trophy');
  if (badgeEl) badgeEl.textContent = `🏆 Đã mở: ${count}/8 Kết Thúc`;
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
    const row = document.createElement('div');
    row.style.cssText = `background: ${isUnlocked ? 'rgba(147, 51, 234, 0.25)' : 'rgba(20, 10, 35, 0.4)'}; border: 1px solid ${isUnlocked ? '#ec4899' : 'rgba(216,180,254,0.15)'}; border-radius: 12px; padding: 12px 16px;`;
    row.innerHTML = `
      <div style="font-weight:700; font-size:14.5px; color:${isUnlocked ? '#fbcfe8' : '#6b7280'};">${isUnlocked ? '🔓 ' + meta.title : '🔒 ??? (Chưa mở khóa)'}</div>
      <div style="font-size:12px; color:${isUnlocked ? '#d8b4fe' : '#4b5563'}; margin-top:4px;">${isUnlocked ? meta.desc : 'Hãy thử các nhánh lựa chọn khác nhau để khám phá kết thúc này.'}</div>
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
} catch (e) {}

updateTrophyCount();

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
</script>
