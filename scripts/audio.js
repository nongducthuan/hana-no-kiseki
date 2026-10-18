// =============================================
//  HANA NO KISEKI — MASTER AUDIO ENGINE
//  Dual-Mode: Real Audio Tracks + Lush Web Audio Fallback
// =============================================

let audioCtx = null;
let bgmGainNode = null;
let currentBgmTheme = null;
let currentHtmlAudio = null;
let bgmFadeInterval = null;
let synthTimer = null;

// Map themes to real audio files
const BGM_TRACKS = {
  spring:   'assets/audio/bgm/spring.mp3',
  sunset:   'assets/audio/bgm/sunset.wav',
  tsundere: 'assets/audio/bgm/tsundere.mp3',
  romance:  'assets/audio/bgm/sunset.wav'
};

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
      bgmGainNode = audioCtx.createGain();
      bgmGainNode.gain.setValueAtTime(state.cfg.bgmVol, audioCtx.currentTime);
      bgmGainNode.connect(audioCtx.destination);
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// ---------------------------------------------
// BGM Switcher with Cross-fading
// ---------------------------------------------
function switchBgm(theme) {
  if (currentBgmTheme === theme) return;
  currentBgmTheme = theme;
  initAudio();

  // Stop synthetic backup
  clearInterval(synthTimer);

  // Crossfade old HTML5 Audio
  if (currentHtmlAudio) {
    const oldAudio = currentHtmlAudio;
    let vol = oldAudio.volume;
    const fadeOut = setInterval(() => {
      vol = Math.max(0, vol - 0.08);
      oldAudio.volume = vol;
      if (vol <= 0.01) {
        clearInterval(fadeOut);
        oldAudio.pause();
        oldAudio.currentTime = 0;
      }
    }, 50);
    currentHtmlAudio = null;
  }

  if (!theme) return;

  const trackSrc = BGM_TRACKS[theme];
  if (trackSrc) {
    const audio = new Audio(trackSrc);
    audio.loop = true;
    audio.volume = 0;
    const targetVol = state.cfg.bgmVol;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        currentHtmlAudio = audio;
        let v = 0;
        const fadeIn = setInterval(() => {
          v = Math.min(targetVol, v + 0.05);
          audio.volume = v;
          if (v >= targetVol) clearInterval(fadeIn);
        }, 60);
      }).catch(err => {
        console.warn('Real audio play blocked or missing, using procedural synthesizer:', err);
        startProceduralBgm(theme);
      });
      return;
    }
  }

  // Fallback to procedural
  startProceduralBgm(theme);
}

// ---------------------------------------------
// Procedural Lush Polyphonic Synthesizer
// ---------------------------------------------
const CHORD_PROGRESSIONS = {
  spring: [
    [261.63, 329.63, 392.00, 440.00], // C6
    [220.00, 261.63, 329.63, 392.00], // Am7
    [174.61, 220.00, 261.63, 329.63], // Fmaj7
    [196.00, 246.94, 293.66, 392.00]  // G
  ],
  sunset: [
    [220.00, 261.63, 329.63, 440.00], // Am
    [174.61, 220.00, 261.63, 329.63], // Fmaj7
    [261.63, 329.63, 392.00, 523.25], // C
    [164.81, 196.00, 246.94, 329.63]  // Em
  ],
  tsundere: [
    [293.66, 369.99, 440.00, 587.33], // D
    [220.00, 277.18, 329.63, 440.00], // A
    [246.94, 293.66, 369.99, 493.88], // Bm
    [196.00, 246.94, 293.66, 392.00]  // G
  ],
  romance: [
    [261.63, 329.63, 392.00, 493.88], // Cmaj7
    [220.00, 261.63, 329.63, 493.88], // Am9
    [174.61, 220.00, 261.63, 349.23], // F
    [196.00, 246.94, 293.66, 440.00]  // Gsus4
  ]
};

let chordIdx = 0;
let noteIdx = 0;

function startProceduralBgm(theme) {
  chordIdx = 0;
  noteIdx = 0;
  clearInterval(synthTimer);
  synthTimer = setInterval(() => {
    playLushNote(theme);
  }, 480);
  playLushNote(theme);
}

function playLushNote(theme) {
  if (!audioCtx || !bgmGainNode) return;
  const progression = CHORD_PROGRESSIONS[theme] || CHORD_PROGRESSIONS.spring;
  const currentChord = progression[chordIdx % progression.length];

  const freq = currentChord[noteIdx % currentChord.length];
  noteIdx++;
  if (noteIdx % 4 === 0) chordIdx++;

  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = theme === 'sunset' ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(freq, now);

    const peak = 0.04 * state.cfg.bgmVol;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(peak, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

    osc.connect(gain);
    gain.connect(bgmGainNode);

    osc.start(now);
    osc.stop(now + 1.45);
  } catch (e) {}
}

// ---------------------------------------------
// Sound Effects (SFX)
// ---------------------------------------------
function playTone(freq, type = 'sine', duration = 0.08, gainVal = 0.05) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    const finalVol = gainVal * state.cfg.sfxVol;
    gain.gain.setValueAtTime(finalVol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}

function sfxType() {
  if (state.isSkip) return;
  playTone(560 + Math.random() * 80, 'sine', 0.03, 0.02);
}

function sfxClick() {
  playTone(720, 'sine', 0.07, 0.05);
}

function sfxChoice() {
  playTone(880, 'triangle', 0.12, 0.07);
}

function sfxHeart() {
  playTone(659, 'sine', 0.1, 0.06);
  setTimeout(() => playTone(880, 'sine', 0.2, 0.08), 100);
}
