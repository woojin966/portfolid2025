// lang.js

let currentLang = 'en';

if (navigator.language.startsWith('ko')) {
  currentLang = 'kr';
} else {
  currentLang = 'en';
}

function setLanguage(lang) {
   // label
  document.querySelector('.job_section .label').textContent = i18n[lang].section2_label;
  document.querySelector('.portfolio_section .label').textContent = i18n[lang].section3_label;
  document.querySelector('.skill_section .label').textContent = i18n[lang].skills_msg;
  document.querySelector('.career_section .label').textContent = i18n[lang].career_msg;
  document.querySelector('.contact_section .label').textContent = i18n[lang].contact_label;
  document.querySelector('.contact_section .title p.big').innerHTML = i18n[lang].contact_msg;

  // section title
  document.querySelector('.job_section h2').innerHTML = i18n[lang].jobTitle;
  document.querySelector('.portfolio_section h2').innerHTML = i18n[lang].project_intro_h2;

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
    document.querySelector('body').classList.add('en');
  }
  if (lang === 'kr') {
    projectCards.forEach(card => {
      card.style.display = '';
    });
    document.querySelector('body').classList.remove('en');
  }

  // section 4
  // card
  const cards = document.querySelectorAll('.project_card');
  const data = i18n[lang].projects;

  cards.forEach((card, idx) => {
    const project = data[idx];

    if (!project) return;

    card.querySelector(".contribution_box .description .text.mb").textContent = project.meta;
    card.querySelector(".contribution_box .description .text.n").innerHTML = project.desc;
    card.querySelector(".productname_box h3").innerHTML = project.title;
    card.querySelector(".project_buttons a.site").textContent = i18n[lang].project_btn_visit;
  });

  // section 6
  const careerItems = document.querySelectorAll('.career_box .career');
const careerData = i18n[lang].career_items;

careerItems.forEach((el, idx) => {
  const data = careerData[idx];

  // period
  const periodEl = el.querySelector('p.medium');
  if (periodEl) periodEl.textContent = data.period;

  // h3
  const h3 = el.querySelector('h3');
  if (!h3) return;

  // reset
  h3.innerHTML = "";

  // title
  h3.append(document.createTextNode(data.title));

  // role
  if (data.role) {
    const br = document.createElement('br');
    h3.append(br);

    const span = document.createElement('span');
    span.innerHTML = `: ${data.role}`;
    h3.append(span);
  }
});

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