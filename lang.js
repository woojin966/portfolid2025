// lang.js

let currentLang = 'en';

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

  currentLang = lang;
}

// 버튼 토글
const toggleBtn = document.getElementById('langToggle');

toggleBtn.addEventListener('click', () => {
  const next = currentLang === 'en' ? 'kr' : 'en';
  setLanguage(next);

  toggleBtn.textContent = next.toUpperCase(); // EN <-> KR
});
