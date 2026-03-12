/**
 * CHIFFRES EN LETTRES — app.js
 * Site éducatif bilingue FR/EN pour apprendre les chiffres en lettres
 * © 2026 Tobi Tech
 */

'use strict';

// =============================================
// TRANSLATIONS (i18n)
// =============================================
const T = {
  fr: {
    nav_home: 'Accueil', nav_converter: 'Convertisseur', nav_mcq: 'QCM', nav_qa: 'Q / R',
    hero_badge: 'Éducatif · Bilingue · Gratuit',
    hero_title_1: 'Chiffres', hero_title_2: 'en Lettres',
    hero_subtitle: 'Entraînez-vous à convertir les chiffres en lettres et les lettres en chiffres',
    start_converter: 'Convertisseur', start_mcq: 'Mode QCM', start_qa: 'Question / Réponse',
    converter_desc: 'Convertissez instantanément un nombre en lettres',
    mcq_desc: 'Testez-vous avec des questions à choix multiple',
    qa_desc: 'Écrivez le chiffre correspondant à un nombre en lettres',
    converter_title: 'Convertisseur',
    converter_placeholder: 'Entrez un nombre…',
    btn_convert: 'Convertir', btn_copy: 'Copier', btn_reset: 'Réinitialiser',
    copy_success: '✓ Copié !',
    converter_result_placeholder: 'Le résultat apparaîtra ici',
    questions_count: 'Nombre de questions',
    custom: 'Personnalisé',
    difficulty: 'Niveau de difficulté',
    timer_option: 'Chronomètre',
    timer_duration: 'Durée (minutes)',
    btn_start: 'Commencer',
    diff_very_easy: 'Très Facile', diff_easy: 'Facile', diff_normal: 'Normal',
    diff_hard: 'Difficile', diff_very_hard: 'Très Difficile', diff_impossible: 'Impossible',
    diff_very_easy_range: '1 – 1 000', diff_easy_range: '1 001 – 100 000',
    diff_normal_range: '100 001 – 1 000 000', diff_hard_range: '1 000 001 – 100 000 000',
    diff_very_hard_range: '100 000 001 – 1 000 000 000', diff_impossible_range: '> 1 000 000 000',
    question_label: 'Question', of_label: 'sur',
    time_left: 'Temps', btn_next: 'Suivant →', btn_submit: 'Valider',
    input_placeholder: 'Entrez le nombre…',
    correct_answer: '✓ Bonne réponse !', wrong_answer: '✗ Mauvaise réponse',
    time_up: '⏰ Temps écoulé !',
    results_title: 'Résultats', score_label: 'Score',
    correct_label: 'Bonnes réponses', wrong_label: 'Mauvaises réponses',
    time_used: 'Temps utilisé', btn_replay: '↺ Rejouer', btn_home: 'Accueil',
    mistakes_title: 'Questions ratées',
    stats_title: 'Historique',
    home_best_mcq: 'Meilleur score QCM', home_best_qa: 'Meilleur score Q/R',
    home_total_games: 'Parties jouées',
    no_stats: 'Aucune statistique.',
    mcq_title: 'Mode QCM', qa_title: 'Question / Réponse',
    timer_enabled: 'Activé', timer_disabled: 'Désactivé',
    exit_confirm: 'Quitter le quiz ? Votre progression sera perdue.',
    btn_exit_yes: 'Quitter', btn_exit_no: 'Continuer',
    footer_text: 'Chiffres en Lettres © 2026',
    footer_legal: "Les informations transmises sont données à titre indicatif. L'utilisation est gratuite et réservée à un usage strictement personnel.",
    footer_dev: 'Développé par',
    the_answer_was: 'La réponse était :',
    your_answer_was: 'Votre réponse :',
  },
  en: {
    nav_home: 'Home', nav_converter: 'Converter', nav_mcq: 'MCQ', nav_qa: 'Q / A',
    hero_badge: 'Educational · Bilingual · Free',
    hero_title_1: 'Numbers', hero_title_2: 'in Words',
    hero_subtitle: 'Practice converting numbers to words and words to numbers',
    start_converter: 'Converter', start_mcq: 'MCQ Mode', start_qa: 'Question / Answer',
    converter_desc: 'Instantly convert a number to words',
    mcq_desc: 'Test yourself with multiple choice questions',
    qa_desc: 'Write the number corresponding to a word',
    converter_title: 'Converter',
    converter_placeholder: 'Enter a number…',
    btn_convert: 'Convert', btn_copy: 'Copy', btn_reset: 'Reset',
    copy_success: '✓ Copied!',
    converter_result_placeholder: 'Result will appear here',
    questions_count: 'Number of questions',
    custom: 'Custom',
    difficulty: 'Difficulty level',
    timer_option: 'Timer',
    timer_duration: 'Duration (minutes)',
    btn_start: 'Start',
    diff_very_easy: 'Very Easy', diff_easy: 'Easy', diff_normal: 'Normal',
    diff_hard: 'Hard', diff_very_hard: 'Very Hard', diff_impossible: 'Impossible',
    diff_very_easy_range: '1 – 1,000', diff_easy_range: '1,001 – 100,000',
    diff_normal_range: '100,001 – 1,000,000', diff_hard_range: '1,000,001 – 100,000,000',
    diff_very_hard_range: '100,000,001 – 1,000,000,000', diff_impossible_range: '> 1,000,000,000',
    question_label: 'Question', of_label: 'of',
    time_left: 'Time', btn_next: 'Next →', btn_submit: 'Submit',
    input_placeholder: 'Enter the number…',
    correct_answer: '✓ Correct!', wrong_answer: '✗ Wrong answer',
    time_up: '⏰ Time\'s up!',
    results_title: 'Results', score_label: 'Score',
    correct_label: 'Correct', wrong_label: 'Wrong',
    time_used: 'Time used', btn_replay: '↺ Play again', btn_home: 'Home',
    mistakes_title: 'Missed questions',
    stats_title: 'History',
    home_best_mcq: 'Best MCQ score', home_best_qa: 'Best Q/A score',
    home_total_games: 'Games played',
    no_stats: 'No statistics yet.',
    mcq_title: 'MCQ Mode', qa_title: 'Question / Answer',
    timer_enabled: 'Enabled', timer_disabled: 'Disabled',
    exit_confirm: 'Quit the quiz? Your progress will be lost.',
    btn_exit_yes: 'Quit', btn_exit_no: 'Continue',
    footer_text: 'Numbers in Words © 2026',
    footer_legal: 'Information provided is for educational purposes only. Free to use for personal use only.',
    footer_dev: 'Developed by',
    the_answer_was: 'The answer was:',
    your_answer_was: 'Your answer:',
  }
};

// =============================================
// DIFFICULTY RANGES
// =============================================
const RANGES = {
  'very-easy':  [1,          1000],
  'easy':       [1001,       100000],
  'normal':     [100001,     1000000],
  'hard':       [1000001,    100000000],
  'very-hard':  [100000001,  1000000000],
  'impossible': [1000000001, 999999999999],
};

// =============================================
// STATE
// =============================================
let state = {
  lang:  localStorage.getItem('lang')  || 'fr',
  theme: localStorage.getItem('theme') || 'light',
  currentPage: 'home',

  // Setup choices per mode (mcq / qa)
  setup: {
    mcq: { diff: 'very-easy', count: 10, timerEnabled: false, timerMinutes: 5 },
    qa:  { diff: 'very-easy', count: 10, timerEnabled: false, timerMinutes: 5 },
  },

  // Active quiz
  quiz: null,
};

// =============================================
// NUMBER → WORDS : FRENCH
// =============================================

const FR_UNITS = [
  'zéro','un','deux','trois','quatre','cinq','six','sept','huit','neuf',
  'dix','onze','douze','treize','quatorze','quinze','seize',
  'dix-sept','dix-huit','dix-neuf'
];

/** Convert 0–99 to French words. noFinalS suppresses plural s on 80/100. */
function fr_below100(n, noFinalS) {
  if (n < 20) return FR_UNITS[n];
  const t = Math.floor(n / 10);
  const r = n % 10;
  const tens = ['','','vingt','trente','quarante','cinquante','soixante'];

  if (t <= 6) {
    if (r === 0) return tens[t];
    if (r === 1) return tens[t] + '-et-un';
    return tens[t] + '-' + FR_UNITS[r];
  }
  if (t === 7) {
    if (n === 71) return 'soixante-et-onze';
    return 'soixante-' + FR_UNITS[n - 60];   // soixante-dix … soixante-dix-neuf
  }
  if (t === 8) {
    if (r === 0) return noFinalS ? 'quatre-vingt' : 'quatre-vingts';
    return 'quatre-vingt-' + FR_UNITS[r];
  }
  // t === 9 : quatre-vingt-dix…
  return 'quatre-vingt-' + FR_UNITS[n - 80];
}

/** Convert 0–999. noFinalS: no plural s on cent/vingt when used before mille/million. */
function fr_below1000(n, noFinalS) {
  if (n === 0) return '';
  if (n < 100) return fr_below100(n, noFinalS);
  const h = Math.floor(n / 100);
  const r = n % 100;
  let s;
  if (h === 1) {
    s = 'cent';
  } else {
    s = FR_UNITS[h] + ' cent' + (r === 0 && !noFinalS ? 's' : '');
  }
  if (r > 0) s += ' ' + fr_below100(r, false);
  return s;
}

/** Main French number-to-words function. */
function numberToWordsFR(num) {
  if (!Number.isFinite(num) || num < 0) return '';
  if (num === 0) return 'zéro';
  let result = '';
  let n = Math.floor(num);

  if (n >= 1000000000) {
    const b = Math.floor(n / 1000000000);
    result += (b === 1 ? 'un milliard' : fr_below1000(b, true) + ' milliards');
    n %= 1000000000;
    if (n > 0) result += ' ';
  }
  if (n >= 1000000) {
    const m = Math.floor(n / 1000000);
    result += (m === 1 ? 'un million' : fr_below1000(m, true) + ' millions');
    n %= 1000000;
    if (n > 0) result += ' ';
  }
  if (n >= 1000) {
    const k = Math.floor(n / 1000);
    result += (k === 1 ? 'mille' : fr_below1000(k, true) + ' mille');
    n %= 1000;
    if (n > 0) result += ' ';
  }
  if (n > 0) result += fr_below1000(n, false);
  return result;
}

// =============================================
// NUMBER → WORDS : ENGLISH
// =============================================

const EN_ONES = [
  '','one','two','three','four','five','six','seven','eight','nine',
  'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen',
  'seventeen','eighteen','nineteen'
];
const EN_TENS = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

function en_below100(n) {
  if (n < 20) return EN_ONES[n];
  return EN_TENS[Math.floor(n / 10)] + (n % 10 ? '-' + EN_ONES[n % 10] : '');
}

function en_below1000(n) {
  if (n < 100) return en_below100(n);
  const h = Math.floor(n / 100);
  const r = n % 100;
  return EN_ONES[h] + ' hundred' + (r ? ' ' + en_below100(r) : '');
}

/** Main English number-to-words function. */
function numberToWordsEN(num) {
  if (!Number.isFinite(num) || num < 0) return '';
  if (num === 0) return 'zero';
  let result = '';
  let n = Math.floor(num);

  if (n >= 1000000000) {
    result += en_below1000(Math.floor(n / 1000000000)) + ' billion';
    n %= 1000000000;
    if (n > 0) result += ' ';
  }
  if (n >= 1000000) {
    result += en_below1000(Math.floor(n / 1000000)) + ' million';
    n %= 1000000;
    if (n > 0) result += ' ';
  }
  if (n >= 1000) {
    result += en_below1000(Math.floor(n / 1000)) + ' thousand';
    n %= 1000;
    if (n > 0) result += ' ';
  }
  if (n > 0) result += en_below1000(n);
  return result;
}

/** Dispatch to FR or EN */
function numberToWords(n, lang) {
  return lang === 'fr' ? numberToWordsFR(n) : numberToWordsEN(n);
}

// =============================================
// NAVIGATION
// =============================================
function navigate(page) {
  // Close mobile menu
  document.getElementById('nav-links').classList.remove('open');

  // Update active nav link
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navMap = { home: 0, converter: 1, 'mcq-setup': 2, 'qa-setup': 3 };
  const idx = navMap[page];
  if (idx !== undefined) {
    const links = document.querySelectorAll('.nav-links a');
    if (links[idx]) links[idx].classList.add('active');
  }

  // Hide all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.classList.add('hidden');
  });

  // Show requested page
  const el = document.getElementById('page-' + page);
  if (el) {
    el.classList.remove('hidden');
    el.classList.add('active');
  }

  state.currentPage = page;

  if (page === 'home') renderHomeStats();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

// =============================================
// THEME
// =============================================
function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme();
  localStorage.setItem('theme', state.theme);
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
}

// =============================================
// LANGUAGE
// =============================================
function toggleLang() {
  state.lang = state.lang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('lang', state.lang);
  applyLang();
}

function applyLang() {
  const lang = state.lang;
  document.documentElement.lang = lang;
  document.getElementById('lang-btn').textContent = lang === 'fr' ? 'EN' : 'FR';

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang][key]) el.textContent = T[lang][key];
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (T[lang][key]) el.placeholder = T[lang][key];
  });
}

function t(key) {
  return T[state.lang][key] || key;
}

// =============================================
// CONVERTER
// =============================================
function convert() {
  const input = document.getElementById('converter-input');
  const val = input.value.trim();
  if (val === '') return;

  const num = parseInt(val, 10);
  if (isNaN(num) || num < 0 || num > 999999999999) {
    showConverterError();
    return;
  }

  const word = numberToWords(num, state.lang);
  const resultEl  = document.getElementById('converter-result');
  const copyBtn   = document.getElementById('copy-btn');
  const resultBox = document.getElementById('result-box');
  const hint      = document.getElementById('converter-hint');

  resultEl.textContent = word;
  resultEl.classList.remove('placeholder');
  resultBox.classList.add('has-result');
  copyBtn.classList.remove('hidden');
  copyBtn.textContent = t('btn_copy');

  // Hint: formatted number
  hint.textContent = num.toLocaleString(state.lang === 'fr' ? 'fr-FR' : 'en-US');

  resultEl.classList.add('pulse');
  setTimeout(() => resultEl.classList.remove('pulse'), 400);
}

function liveConvert() {
  const input = document.getElementById('converter-input');
  const val = input.value.trim();
  if (val === '' || val.length > 12) return;
  const num = parseInt(val, 10);
  if (!isNaN(num) && num >= 0 && num <= 999999999999) {
    convert();
  }
}

function showConverterError() {
  const resultEl  = document.getElementById('converter-result');
  const resultBox = document.getElementById('result-box');
  resultEl.textContent = state.lang === 'fr'
    ? 'Nombre invalide (0 – 999 999 999 999)'
    : 'Invalid number (0 – 999,999,999,999)';
  resultEl.classList.remove('placeholder');
  resultBox.classList.remove('has-result');
  resultEl.classList.add('shake');
  setTimeout(() => resultEl.classList.remove('shake'), 400);
}

function resetConverter() {
  document.getElementById('converter-input').value = '';
  const resultEl  = document.getElementById('converter-result');
  const copyBtn   = document.getElementById('copy-btn');
  const resultBox = document.getElementById('result-box');
  const hint      = document.getElementById('converter-hint');

  resultEl.textContent = t('converter_result_placeholder');
  resultEl.classList.add('placeholder');
  resultBox.classList.remove('has-result');
  copyBtn.classList.add('hidden');
  hint.textContent = '';
  document.getElementById('converter-input').focus();
}

function copyResult() {
  const text = document.getElementById('converter-result').textContent;
  const btn  = document.getElementById('copy-btn');
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = t('copy_success');
    setTimeout(() => { btn.textContent = t('btn_copy'); }, 2000);
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = t('copy_success');
    setTimeout(() => { btn.textContent = t('btn_copy'); }, 2000);
  });
}

// =============================================
// SETUP HELPERS
// =============================================
function selectDiff(mode, btn, diff) {
  state.setup[mode].diff = diff;
  btn.closest('.difficulty-grid').querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectCount(mode, btn, count) {
  state.setup[mode].count = count;
  btn.closest('.count-grid').querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const wrap = document.getElementById(mode + '-custom-wrap');
  if (count === 'custom') wrap.classList.remove('hidden');
  else wrap.classList.add('hidden');
}

function setTimerOpt(mode, enabled) {
  state.setup[mode].timerEnabled = enabled;
  const offBtn  = document.getElementById(mode + '-timer-off');
  const onBtn   = document.getElementById(mode + '-timer-on');
  const config  = document.getElementById(mode + '-timer-config');

  offBtn.classList.toggle('active', !enabled);
  onBtn.classList.toggle('active', enabled);
  config.classList.toggle('hidden', !enabled);
}

// =============================================
// QUIZ GENERATION
// =============================================

/** Generate a random integer in [min, max] inclusive */
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Fisher-Yates shuffle */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Generate N unique random numbers in the given difficulty range */
function generateNumbers(diff, count) {
  const [min, max] = RANGES[diff];
  const nums = new Set();
  let attempts = 0;

  while (nums.size < count && attempts < count * 20) {
    nums.add(randInt(min, max));
    attempts++;
  }

  // If range too small, pad with sequential
  let n = min;
  while (nums.size < count && n <= max) { nums.add(n++); }

  return Array.from(nums);
}

/** Generate plausible wrong answers for MCQ */
function generateWrongAnswers(correctNum, diff, lang, count) {
  const [min, max] = RANGES[diff];
  const correctWord = numberToWords(correctNum, lang);
  const wrongs = new Set();
  let attempts = 0;

  while (wrongs.size < count && attempts < 400) {
    let candidate;

    if (attempts < 80) {
      // Strategy 1: small perturbation (change 1–2 digits)
      const mag = Math.pow(10, Math.floor(Math.log10(Math.max(correctNum, 1))));
      const delta = (Math.random() > 0.5 ? 1 : -1) * randInt(1, Math.max(1, Math.floor(mag)));
      candidate = Math.round(correctNum + delta);
    } else {
      // Strategy 2: random in range
      candidate = randInt(min, max);
    }

    candidate = Math.max(min, Math.min(max, candidate));
    if (candidate === correctNum) { attempts++; continue; }

    const word = numberToWords(candidate, lang);
    if (word !== correctWord && !wrongs.has(word)) {
      wrongs.add(word);
    }
    attempts++;
  }

  // Fallback: ensure we always have enough
  let fallback = min;
  while (wrongs.size < count) {
    const w = numberToWords(fallback, lang);
    if (w !== correctWord && !wrongs.has(w)) wrongs.add(w);
    fallback++;
    if (fallback > max) break;
  }

  return Array.from(wrongs).slice(0, count);
}

/** Build a full MCQ question object */
function buildMCQQuestion(num, diff, lang) {
  const correctWord = numberToWords(num, lang);
  const wrongs = generateWrongAnswers(num, diff, lang, 3);
  const choices = shuffle([correctWord, ...wrongs]);
  return {
    number: num,
    correctWord,
    choices,
    correctIndex: choices.indexOf(correctWord),
    userAnswer: null,
    isCorrect: null,
  };
}

/** Build a full QA question object */
function buildQAQuestion(num, lang) {
  return {
    number: num,
    word: numberToWords(num, lang),
    userAnswer: null,
    isCorrect: null,
  };
}

// =============================================
// QUIZ START
// =============================================
function startQuiz(mode) {
  const setup = state.setup[mode];

  // Resolve count
  let count = setup.count;
  if (count === 'custom') {
    const input = document.getElementById(mode + '-custom-input');
    count = Math.max(1, Math.min(100, parseInt(input.value) || 10));
  }

  // Resolve timer
  const timerDuration = setup.timerEnabled
    ? Math.max(1, parseInt(document.getElementById(mode + '-timer-minutes').value) || 5) * 60
    : null;

  // Generate questions
  const nums = generateNumbers(setup.diff, count);
  const questions = nums.map(n =>
    mode === 'mcq'
      ? buildMCQQuestion(n, setup.diff, state.lang)
      : buildQAQuestion(n, state.lang)
  );

  state.quiz = {
    mode,
    diff: setup.diff,
    questions,
    current: 0,
    score: 0,
    startTime: Date.now(),
    timerDuration,
    timerRemaining: timerDuration,
    timerInterval: null,
    lastSetupMode: mode,
  };

  // Navigate to quiz page
  navigate(mode + '-quiz');

  // Start timer if enabled
  if (timerDuration) {
    startTimer(mode);
  } else {
    const badge = document.getElementById(mode + '-timer-badge');
    if (badge) badge.classList.add('hidden');
  }

  renderQuestion();
}

// =============================================
// TIMER
// =============================================
function startTimer(mode) {
  const q = state.quiz;
  const badge   = document.getElementById(mode + '-timer-badge');
  const display = document.getElementById(mode + '-timer-display');
  if (badge) badge.classList.remove('hidden');

  q.timerInterval = setInterval(() => {
    q.timerRemaining--;
    if (display) display.textContent = formatTime(q.timerRemaining);

    if (q.timerRemaining <= 60 && badge) badge.classList.add('warning');

    if (q.timerRemaining <= 0) {
      clearInterval(q.timerInterval);
      q.timerInterval = null;
      handleTimeUp();
    }
  }, 1000);

  if (display) display.textContent = formatTime(q.timerRemaining);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return m + ':' + s;
}

function handleTimeUp() {
  const q = state.quiz;
  // Auto-mark remaining questions as wrong
  for (let i = q.current; i < q.questions.length; i++) {
    q.questions[i].isCorrect = false;
  }
  showResults();
}

function stopTimer() {
  if (state.quiz && state.quiz.timerInterval) {
    clearInterval(state.quiz.timerInterval);
    state.quiz.timerInterval = null;
  }
}

// =============================================
// RENDER QUESTION
// =============================================
function renderQuestion() {
  const q = state.quiz;
  if (!q) return;
  const question = q.questions[q.current];
  const mode = q.mode;
  const total = q.questions.length;
  const idx   = q.current;

  // Update progress
  const pct = ((idx) / total) * 100;
  document.getElementById(mode + '-progress-fill').style.width = pct + '%';
  document.getElementById(mode + '-progress-label').textContent = (idx + 1) + ' ' + t('of_label') + ' ' + total;

  if (mode === 'mcq') {
    // Question label
    document.getElementById('mcq-q-label').textContent = t('question_label') + ' ' + (idx + 1);
    // Display number
    document.getElementById('mcq-number').textContent = question.number.toLocaleString(state.lang === 'fr' ? 'fr-FR' : 'en-US');

    // Render choices
    const grid = document.getElementById('mcq-choices');
    grid.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    question.choices.forEach((choice, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerHTML = `<span class="choice-letter">${letters[i]}</span><span class="choice-text">${choice}</span>`;
      btn.onclick = () => handleMCQAnswer(i);
      grid.appendChild(btn);
    });

    // Reset UI
    const fb = document.getElementById('mcq-feedback');
    fb.className = 'feedback-bar';
    fb.textContent = '';
    document.getElementById('btn-next-mcq').classList.add('hidden');

  } else {
    // QA mode
    document.getElementById('qa-q-label').textContent = t('question_label') + ' ' + (idx + 1);
    document.getElementById('qa-word').textContent = question.word;

    const input = document.getElementById('qa-input');
    input.value = '';
    input.className = 'qa-input';
    input.disabled = false;
    input.focus();

    const fb = document.getElementById('qa-feedback');
    fb.className = 'feedback-bar';
    fb.textContent = '';

    document.getElementById('btn-submit-qa').classList.remove('hidden');
    document.getElementById('btn-next-qa').classList.add('hidden');
  }
}

// =============================================
// MCQ ANSWER
// =============================================
function handleMCQAnswer(choiceIndex) {
  const q = state.quiz;
  if (!q || q.current >= q.questions.length) return;
  const question = q.questions[q.current];
  if (question.userAnswer !== null) return; // Already answered

  question.userAnswer = choiceIndex;
  const isCorrect = choiceIndex === question.correctIndex;
  question.isCorrect = isCorrect;
  if (isCorrect) q.score++;

  // Disable all choices and mark them
  const btns = document.querySelectorAll('#mcq-choices .choice-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === question.correctIndex) btn.classList.add('revealed');
    else if (i === choiceIndex && !isCorrect) btn.classList.add('wrong');
  });

  // Feedback
  const fb = document.getElementById('mcq-feedback');
  fb.textContent = isCorrect ? t('correct_answer') : t('wrong_answer') + ' — ' + t('the_answer_was') + ' ' + question.correctWord;
  fb.className = 'feedback-bar show ' + (isCorrect ? 'correct-fb' : 'wrong-fb');

  // Show next button
  const isLast = q.current === q.questions.length - 1;
  const nextBtn = document.getElementById('btn-next-mcq');
  nextBtn.textContent = isLast ? t('results_title') + ' →' : t('btn_next');
  nextBtn.classList.remove('hidden');
}

// =============================================
// QA ANSWER
// =============================================
function submitQA() {
  const q = state.quiz;
  if (!q || q.current >= q.questions.length) return;
  const question = q.questions[q.current];
  if (question.userAnswer !== null) return;

  const input = document.getElementById('qa-input');
  const val = input.value.trim();
  const userNum = parseInt(val, 10);

  question.userAnswer = isNaN(userNum) ? null : userNum;
  const isCorrect = userNum === question.number;
  question.isCorrect = isCorrect;
  if (isCorrect) q.score++;

  // Style input
  input.className = 'qa-input ' + (isCorrect ? 'correct' : 'wrong');
  input.disabled = true;

  // Feedback
  const fb = document.getElementById('qa-feedback');
  fb.textContent = isCorrect
    ? t('correct_answer')
    : t('wrong_answer') + ' — ' + t('the_answer_was') + ' ' + question.number.toLocaleString(state.lang === 'fr' ? 'fr-FR' : 'en-US');
  fb.className = 'feedback-bar show ' + (isCorrect ? 'correct-fb' : 'wrong-fb');

  // Hide submit, show next
  document.getElementById('btn-submit-qa').classList.add('hidden');
  const isLast = q.current === q.questions.length - 1;
  const nextBtn = document.getElementById('btn-next-qa');
  nextBtn.textContent = isLast ? t('results_title') + ' →' : t('btn_next');
  nextBtn.classList.remove('hidden');
}

// =============================================
// NEXT QUESTION
// =============================================
function nextQuestion(mode) {
  const q = state.quiz;
  if (!q) return;
  q.current++;
  if (q.current >= q.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// =============================================
// RESULTS
// =============================================
function showResults() {
  stopTimer();
  const q = state.quiz;
  if (!q) return;

  const total    = q.questions.length;
  const correct  = q.questions.filter(x => x.isCorrect === true).length;
  const wrong    = total - correct;
  const pct      = Math.round((correct / total) * 100);
  const elapsed  = Math.round((Date.now() - q.startTime) / 1000);

  // Save to localStorage
  saveScore(q.mode, q.diff, correct, total, pct, elapsed);

  navigate('results');

  // Score ring animation
  const circumference = 2 * Math.PI * 50; // r=50
  const offset = circumference - (pct / 100) * circumference;
  setTimeout(() => {
    const ring = document.getElementById('ring-fill');
    if (ring) {
      ring.style.strokeDasharray  = circumference;
      ring.style.strokeDashoffset = offset;
    }
  }, 100);

  document.getElementById('score-pct').textContent  = pct + '%';
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent   = wrong;
  document.getElementById('res-time').textContent    = formatTime(elapsed);

  // Color the ring based on score
  const ring = document.getElementById('ring-fill');
  if (ring) {
    ring.style.stroke = pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--accent)' : 'var(--error)';
  }

  // Mistakes section
  const mistakes = q.questions.filter(x => x.isCorrect === false);
  const mistakesSection = document.getElementById('mistakes-section');
  const mistakesList    = document.getElementById('mistakes-list');
  if (mistakes.length > 0) {
    mistakesSection.classList.remove('hidden');
    mistakesList.innerHTML = mistakes.slice(0, 8).map(m => {
      if (q.mode === 'mcq') {
        return `<div class="mistake-item"><strong>${m.number.toLocaleString(state.lang === 'fr' ? 'fr-FR' : 'en-US')}</strong>${m.correctWord}</div>`;
      } else {
        return `<div class="mistake-item"><strong>${m.word}</strong>${t('the_answer_was')} ${m.number.toLocaleString(state.lang === 'fr' ? 'fr-FR' : 'en-US')}</div>`;
      }
    }).join('');
  } else {
    mistakesSection.classList.add('hidden');
  }
}

// =============================================
// REPLAY
// =============================================
function replay() {
  const mode = state.quiz ? state.quiz.lastSetupMode || state.quiz.mode : 'mcq';
  navigate(mode + '-setup');
}

// =============================================
// EXIT MODAL
// =============================================
function confirmExit() {
  document.getElementById('modal-exit').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal-exit').classList.add('hidden');
}

function doExit() {
  closeModal();
  stopTimer();
  const mode = state.quiz ? state.quiz.mode : 'mcq';
  state.quiz = null;
  navigate(mode + '-setup');
}

// =============================================
// LOCAL STORAGE / SCORES
// =============================================
function saveScore(mode, diff, correct, total, pct, elapsed) {
  const key = 'cel_scores_' + mode;
  let scores = [];
  try { scores = JSON.parse(localStorage.getItem(key)) || []; } catch(e) { scores = []; }
  scores.unshift({ diff, correct, total, pct, elapsed, date: new Date().toLocaleDateString(state.lang === 'fr' ? 'fr-FR' : 'en-US') });
  if (scores.length > 20) scores = scores.slice(0, 20);
  localStorage.setItem(key, JSON.stringify(scores));
}

function getScores(mode) {
  try { return JSON.parse(localStorage.getItem('cel_scores_' + mode)) || []; }
  catch(e) { return []; }
}

function renderHomeStats() {
  const container = document.getElementById('home-stats');
  if (!container) return;

  const mcqScores = getScores('mcq');
  const qaScores  = getScores('qa');
  const total     = mcqScores.length + qaScores.length;

  if (total === 0) {
    container.innerHTML = `<p style="color:var(--text-muted);font-size:0.85rem;font-style:italic;">${t('no_stats')}</p>`;
    return;
  }

  const bestMCQ = mcqScores.length ? Math.max(...mcqScores.map(s => s.pct)) : null;
  const bestQA  = qaScores.length  ? Math.max(...qaScores.map(s => s.pct))  : null;

  let html = `<div class="home-stats-row">`;
  html += `<div class="home-stat-item"><span class="home-stat-num">${total}</span><span>${t('home_total_games')}</span></div>`;
  if (bestMCQ !== null)
    html += `<div class="home-stat-item"><span class="home-stat-num">${bestMCQ}%</span><span>${t('home_best_mcq')}</span></div>`;
  if (bestQA !== null)
    html += `<div class="home-stat-item"><span class="home-stat-num">${bestQA}%</span><span>${t('home_best_qa')}</span></div>`;
  html += `</div>`;

  container.innerHTML = html;
}

// =============================================
// INITIALISATION
// =============================================
function init() {
  // Apply saved theme and lang
  applyTheme();
  applyLang();

  // Show home page
  navigate('home');

  // Keyboard shortcut: Enter on converter
  document.getElementById('converter-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') convert();
  });

  // Keyboard shortcut: Escape to close modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // Année dynamique dans le footer
  document.querySelectorAll('[data-i18n="footer_text"]').forEach(el => {
    el.textContent = el.textContent.replace('2026', new Date().getFullYear());
  });
}

// Boot
document.addEventListener('DOMContentLoaded', init);
