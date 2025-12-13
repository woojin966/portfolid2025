// i18n.js
const i18n = {
  en: {
    section2_label: "Services",
    jobTitle: "WHAT I DO",
    services_title1: "Web UI Publishing",
    services_dec1:"Clean, semantic HTML and structured SCSS for maintainable and accessible UI.",
    services_title2: "Responsive Web Design",
    services_dec2:"Flexible layouts optimized for desktop, tablet, and mobile devices.",
    services_title3: "Vue UI Development",
    services_dec3:"Interactive UI development using Vue and modern JavaScript, with a focus on components, state, and user experience.",
    services_title4: "Figma to Code",
    services_dec4:"Translating design systems into accurate and production-ready UI.",
    services_title5: "Landing Page & Portfolio Sites",
    services_dec5:"Fast, lightweight one-page websites with clear structure and visual impact.",
    section3_label: "My Projects",
    project_intro_h2: `
        <span class="paragraph"><span>I</span><span>BUILD</span><span>BEAUTIFUL</span></span>
        <span class="paragraph"><span>AND</span><span>COMFOTABLE</span></span>
        <span class="paragraph"><span>WEB EXPERIENCES</span></span>
    `,
    project_btn_visit: "Visit Site",
    project_btn_github: "GitHub",
    Contribution: "Contribution",
    projects: [
      {
        percent: "100%",
        meta: "Design, Publishing, Development / 2025",
        desc: `
          A responsive e-commerce shopping mall built with Vue 3 and Vite, covering the full user flow from product listing to checkout.<br>
          I implemented SCSS-based UI components and key interactions such as quantity control, option selection, address search, and modals, focusing on usability and a smooth shopping experience.
        `,
        title:"Vue proj. REIAS"
      },
      {
        percent: "100%",
        meta: "Design, Publishing, Development / 2025",
        desc: `
          A personal Vue project inspired by Netflix, displaying movie data fetched from the TMDB API by section and genre. <br>
          Users can view detailed movie information in a modal, and Like/Dislike interactions are stored locally to preserve user preferences across sessions.
        `,
        title:"Vue proj. VUEFLIX"
      },
      {
        percent: "100%",
        meta: "Design, Publishing, Development / 2025",
        desc: `
          A personal Vue application that provides date, time, location, and weather information alongside a full to-do management system. <br>
          Users can add, complete, filter, and delete tasks, with multiple delete options designed to improve usability and task management efficiency.
        `,
        title:"Vue proj. Todo APP"
      },
      {
        percent: "50%",
        meta: "Publishing / 2024",
        title: "RIDEUS Website",
        desc: `
          I handled the site's overall markup and styling, implementing a scroll-responsive fixed UI using position: sticky.<br/>
          Icons received active states based on scroll position, triggering animations that enhanced visual feedback.<br/>
          I also developed various interactive elements using jQuery and CSS, gaining deeper insight into building dynamic and user-focused UI/UX.
        `
      },
      {
        percent: "100%",
        meta: "Design, Publishing / 2024",
        title: "Five&Plus Landing Page",
        desc: `
          A personal redesign project created to express the brand identity and mood of “Five&Plus” more effectively.<br/>
          A clean, minimal layout was paired with a dynamically scaling hero video that responds to scroll, keeping the user's focus on the content.<br/>
          Sections were structured around key brand concepts, creating a natural flow that communicates the brand identity throughout the UI.
        `
      },
      {
        percent: "40%",
        meta: "Publishing / 2023",
        title: "RIDEUS Partners",
        desc: `
          I handled the publishing for  RIDEUS’ partner recruitment website, working on both the main page and the proposal submission page.<br/>
          Responsive images were implemented to automatically adjust to screen size, and form elements were carefully customized to improve usability and maintain design consistency.<br/>
          This work contributed to enhancing the user experience throughout the partner recruitment process.
        `
      },
      {
        percent: "40%",
        meta: "Publishing / 2023-2024",
        title: "RIDEUS Shuttle Reservation",
        desc: `
          I worked on the publishing for  RIDEUS’ shuttle bus reservation site, redesigning the main page and the search result (product list) page, excluding the search form and admin shuttle modules.<br/>
          The project involved a mixed environment of SCSS, CSS, JavaScript, and jQuery, and required understanding PHP-based workflows while collaborating closely with planners and developers to achieve efficient results.
        `
      },
      {
        percent: "50%",
        meta: "Publishing / 2023",
        title: "2023 Frieze Chauffeur",
        desc: `
          This was a redesign project for an existing chauffeur reservation site, where new pages needed to be built while preserving all existing functionality.<br/>
          The markup structure remained unchanged, and all class and ID names used in the original JavaScript were retained for compatibility.<br/>
          Through close collaboration with the JavaScript developer, I deepened my understanding of the code and ensured compatibility and efficiency throughout the project.
        `
      },
      {
        percent: "60%",
        meta: "Publishing, Design / 2021",
        title: "NSCN Website",
        desc: `
          I handled the UI/UX design and publishing for the “NSCN(The National Science Challenges Support & Network)” website.<br/>
          I participated from the planning phase, designed the UI, and hand-coded the markup and styling before handing them off to the developer for iterative refinement based on PHP templates.<br/>
          This project was a meaningful first experience in full collaboration across planning, design, publishing, and development.
        `
      }
    ],
    skills_label: "Skills",
    skills_msg: "SKILLS I WORK WITH",
    career_label: "Career",
    career_msg: "CAREER JOURNEY",
    career_items: [
      { period: "2013.08 ~ 2019.06", title: "Print Graphic Designer" },
      { period: "2020.02 ~ 2021.10", title: "HSM Cloudipia(Seoul)", role:"Front-End UI Developer /<br class='mo_block'> UIUX Designer" },
      { period: "2022.04 ~ 2022.07", title: "GSA(Seoul)", role:"Front-End UI Developer" },
      { period: "2023.01 ~ 2025.07", title: "GroundK(Seoul)", role: "Front-End UI Developer" }
    ],
    contact_label: "Glad you’re here",
    contact_msg: `Have an idea? <br class="mo_block">Let’s build it together`,
  },

  kr: {
    section2_label: "가능한 직무",
    jobTitle: "이런 직무를 <br class='mo_hidden'/><br class='mo_block'>할 수 있어요",
    services_title1: "웹 UI 퍼블리싱",
services_dec1: "시멘틱한 HTML 구조와 체계적인 SCSS 설계로 유지보수와 접근성을 고려한 UI를 구현합니다.",

services_title2: "반응형 웹 디자인",
services_dec2: "데스크톱, 태블릿, 모바일 환경에 최적화된 유연한 레이아웃을 설계합니다.",

services_title3: "Vue UI 개발",
services_dec3: "Vue와 JavaScript를 활용해 컴포넌트 기반의 인터랙티브한 UI를 구현하며, 상태 관리와 사용자 경험을 중점으로 개발합니다.",

services_title4: "디자인 → 코드 구현",
services_dec4: "디자인 시스템과 시안을 기반으로 실제 서비스에 바로 적용 가능한 UI 코드로 구현합니다.",

services_title5: "랜딩 페이지 & 포트폴리오 사이트",
services_dec5: "구조가 명확하고 가볍게 로딩되는 원페이지 웹사이트를 제작합니다.",
    section3_label: "제가 참여한 프로젝트 입니다.",
    project_intro_h2: `
        <span class="paragraph"><span>사용자에게</span><span>아름답고</span></span>
        <span class="paragraph"><span>편안한</span><span>웹</span><span>경험을</span></span>
        <span class="paragraph"><span>제공하기 위해</span><span>노력합니다</span></span>
    `,
    project_btn_visit: "사이트 보기",
    project_btn_github: "GitHub",
    Contribution: "참여도",
    projects: [
      {
        percent: "100%",
        meta: "디자인,퍼블리싱,개발 / 2025",
        desc: `
          Vue 3 + Vite 기반의 반응형 쇼핑몰로, 상품 목록·상세·장바구니·주문·결제완료까지 실제 쇼핑몰 흐름을 구현했습니다. 주문자·배송·결제 정보는 Vuex로 중앙 관리하고, Vue Router로 카테고리·상세·주문 페이지 이동을 구성했습니다. SCSS 기반 컴포넌트 UI, 수량 조절·옵션 선택·주소검색·모달 등 주요 인터랙션을 컴포지션 API로 직접 개발했습니다.
        `,
        title:"Vue proj. REIAS"
      },
      {
        percent: "100%",
        meta: "디자인,퍼블리싱,개발 / 2024",
        desc: `
          개인 Vue proj.로, OTT 서비스 ‘넷플릭스’를 벤치마킹해 제작했습니다. TMDB API로 영화 데이터를 가져와 섹션·장르별로 분류해 보여주며, 포스터 클릭 시 모달에서 이미지·제목·등급·평점·설명을 확인할 수 있습니다. 좋아요/싫어요 선택은 알림 메시지와 함께 로컬에 저장되어 유지됩니다.
        `,
        title:"Vue proj. VUEFLIX"
      },
      {
        percent: "100%",
        meta: "디자인,퍼블리싱,개발 / 2025",
        desc: `
          개인 Vue project로, 날짜·시간·위치·날씨 정보를 제공하며 To-Do 기능을 통해 할 일을 등록하고 완료 처리할 수 있습니다.<br>
          ‘해야 할 일’과 ‘완료된 일’ 필터를 지원하며, 전체 삭제·선택 삭제·완료된 항목만 삭제 등 다양한 삭제 옵션을 구현해 사용자가 더욱 편리하게 작업 흐름을 관리할 수 있도록 구성했습니다.
        `,
        title:"Vue proj. Todo APP"
      },
      {
        percent: "50%",
        meta: "퍼블리싱 / 2024",
        desc: `
          사이트의 마크업과 스타일링 전반을 담당했습니다. position: sticky를 활용해 스크롤에 반응하는 고정 UI를 구현했으며, 스크롤 위치에 따라 아이콘에 액티브 클래스를 적용해 애니메이션과 시각적 피드백을 강화했습니다.<br>
          또한 jQuery와 CSS를 활용해 다양한 인터랙션 요소를 직접 구현하며, 동적인 UI/UX 구성에 대한 이해도를 높인 project입니다.
        `,
        title:"라이더스 홈페이지"
      },
      {
        percent: "100%",
        meta: "퍼블리싱, UIUX디자인 / 2024",
        desc: `
          브랜드 ‘파이브앤플러스’의 감성과 정체성을 효과적으로 전달하기 위해 진행한 리디자인 개인 project입니다.
          간결한 레이아웃 위에 스크롤에 따라 소개 영상의 크기가 유동적으로 변하도록 구현해 사용자 시선이 콘텐츠에 집중되도록 했습니다.
          브랜드를 대표하는 키워드를 기반으로 섹션을 순차적으로 구성해, 자연스럽게 브랜드 아이덴티티가 전달되는 흐름을 설계했습니다.
        `,
        title:"파이브앤플러스 랜딩"
      },
      {
        percent: "40%",
        meta: "퍼블리싱 / 2023",
        desc: `
          라이더스 제휴사 모집 사이트의 퍼블리싱을 담당했습니다.메인 화면과 제휴 제안 페이지를 작업하며, 반응형 환경에 맞춰 이미지가 자동으로 전환되도록 구현했습니다.<br>
          또한 폼 요소를 세밀하게 커스터마이징해 사용 편의성과 디자인 일관성을 높였으며, 제휴사 모집 과정의 UX 향상에 기여했습니다.
        `,
        title:"라이더스 파트너스"
      },
      {
        percent: "40%",
        meta: "퍼블리싱 / 2023-2024",
        desc: `
         라이더스 셔틀버스 예약 사이트 퍼블리싱 작업에 참여했습니다. 서치폼과 어드민용 주요 셔틀 서비스를 제외한 메인 화면 및 검색 후 상품 리스트 페이지의 리디자인을 담당했습니다.<br>
         SCSS, CSS, JavaScript, jQuery가 혼합된 환경에서 PHP 기반 코드를 이해하며 작업했고, 기획자·개발자와의 협업을 통해 효율적인 결과를 도출한 프로젝트입니다.
        `,
        title:"라이더스 셔틀예약"
      },
      {
        percent: "50%",
        meta: "퍼블리싱 / 2023",
        desc: `
          기존 쇼퍼 예약 사이트의 리디자인 프로젝트로, 기존 기능을 유지한 채 새로운 페이지를 구현했습니다. 마크업 구조를 변경하지 않으면서도 기존 JavaScript에서 사용하는 클래스와 아이디명을 그대로 유지해야 했고, 개발자와의 긴밀한 협업을 통해 코드 이해도를 높였습니다.<br>
          프로젝트 전반에서 코드 호환성과 효율성을 고려해 세심하게 작업한 퍼블리싱 프로젝트입니다.
        `,
        title:"2023 frieze 쇼퍼예약"
      },
      {
        percent: "60%",
        meta: "퍼블리싱, UIUX디자인 / 2021",
        desc: `
          국가과학난제도전 홈페이지 프로젝트에서 UI/UX 디자인과 퍼블리싱을 담당했습니다. 기획 단계부터 참여해 디자인을 진행하고, 마크업과 스타일을 하드코딩하여 개발자에게 전달한 뒤 PHP 문서 기반으로 수정 작업을 반복했습니다.<br>
          기획·디자인·퍼블리싱·개발 협업을 처음 경험한 의미 있는 프로젝트였습니다.
        `,
        title:"국가과학난제도전"
      }
    ],
    skills_label: "Skill",
    skills_msg:"아래 기술들로 협업 합니다",
    career_label: "Career",
    career_msg: "이렇게 경험을 쌓았어요",
    career_items: [
      { period: "2013.08 ~ 2019.06", title: "편집 디자이너" },
      { period: "2020.02 ~ 2021.10", title: "HSM 클라우디피아", role: "웹 퍼블리셔 / UIUX 디자이너"},
      { period: "2022.04 ~ 2022.07", title: "GSA", role:"웹 퍼블리셔" },
      { period: "2023.01 ~ 2025.07", title: "그라운드케이", role: "웹 퍼블리셔" }
    ],
    contact_label: "반갑습니다",
    contact_msg: `어떤 생각이 떠오르나요. <br class="mo_block">함께 만들어볼까요?`,
  }
};
