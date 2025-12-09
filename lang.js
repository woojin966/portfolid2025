// lang.js

let currentLang = 'en';

if (navigator.language.startsWith('ko')) {
  currentLang = 'kr';
} else {
  currentLang = 'en';
}

function setLanguage(lang) {
   // label
  document.querySelector('.job_section .label').textContent = i18n[lang].label;

  // section title
  document.querySelector('.job_section h2').innerHTML = i18n[lang].jobTitle;

  // section2 elements
  const items = document.querySelectorAll('.job_section li');

  // section2 text
  items[0].querySelector('.text').innerHTML = i18n[lang].markup_desc;
  items[1].querySelector('.text').innerHTML = i18n[lang].css_desc;
  items[2].querySelector('.text').innerHTML = i18n[lang].js_desc;

  // section3
  // view projuect cards by language
  const projectCards = document.querySelectorAll('.project_card');

  if (lang === 'en') {
    projectCards.forEach((card, index) => {
      card.style.display = index < 3 ? '' : 'none';
    });
  }
  if (lang === 'kr') {
    projectCards.forEach(card => {
      card.style.display = '';
    });
  }

  currentLang = lang;
}

/* 3) 페이지 최초 로드 시 자동 적용 */
window.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  // 버튼 표시 업데이트
  const toggleBtn = document.getElementById('langToggle');
  toggleBtn.textContent = currentLang === 'en' ? 'EN' : 'KR';
});

/* 4) 토글 버튼으로 언어 변경 */
const toggleBtn = document.getElementById('langToggle');

toggleBtn.addEventListener('click', () => {
  const next = currentLang === 'en' ? 'kr' : 'en';
  setLanguage(next);
  toggleBtn.textContent = next.toUpperCase();
});