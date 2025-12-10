// i18n.js
const i18n = {
  en: {
    section2_label: "Capabilities",
    jobTitle: "WHAT I DO",
    markup_desc: "Semantic, clean and scalable HTML structure.",
    css_desc: "Modular, maintainable styling with modern CSS.",
    js_desc: "Interactive UI with JavaScript / jQuery. Familiar with Vue / PHP workflows collaboration.",
    section3_label: "My Projects",
    project_intro_h2: `
        <span class="paragraph"><span>I</span><span>BUILD</span><span>BEAUTIFUL</span></span>
        <span class="paragraph"><span>AND</span><span>COMFOTABLE</span></span>
        <span class="paragraph"><span>WEB EXPERIENCES.</span></span>
    `,
    project_btn_visit: "Visit Site",
    project_btn_github: "GitHub",
    Contribution: "Contribution",
    projects: [
      {
        percent: "100%",
        meta: "Design, Publishing, Development / 2025",
        desc: `
          A responsive shopping mall built with Vue 3 and Vite, featuring a full e-commerce flow from product listing to checkout. Vuex manages order, shipping, and payment data, while Vue Router handles page navigation.<br>
          I implemented SCSS-based UI components and key interactions—such as quantity control, option selection, address search, and modals—using the Composition API.
        `,
        title:"Vue proj. : REIAS"
      },
      {
        percent: "100%",
        meta: "Design, Publishing, Development / 2025",
        desc: `
          A personal Vue project inspired by Netflix. Movie data is fetched via the TMDB API and displayed by section and genre. Clicking a poster opens a modal showing the image, title, rating, score, and description. Like/Dislike selections trigger a notification and are saved locally to persist the user’s state.
        `,
        title:"Vue proj. : VUEFLIX"
      },
      {
        percent: "100%",
        meta: "Design, Publishing, Development / 2025",
        desc: `
          A personal Vue project providing date, time, location, and weather information, along with a full To-Do management feature. Users can add tasks, mark them as complete, and filter between “To-Do” and “Done.”<br>
          The app also includes multiple delete options—delete all, delete selected, and delete completed—to offer a more convenient and flexible task-management experience.
        `,
        title:"Vue proj. : Todo APP"
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
    ]
  },

  kr: {
    section2_label: "가능한 직무",
    jobTitle: "이런 직무를 <br class='mo_hidden'/><br class='mo_block'>할 수 있어요",
    markup_desc: "시멘틱 구조 기반의 깔끔하고 읽기 쉬운 마크업을 <br class='mo_block'>구현합니다.",
    css_desc: "유지보수 쉬운 구조적 CSS 설계를 지향합니다.",
    js_desc: "JavaScript/jQuery로 인터랙션을 구현하며 <br class='mo_block'>Vue/PHP구조를 이해해 협업을 원활하게 진행합니다.",
    section3_label: "제가 참여한 proj. 입니다.",
    project_intro_h2: `
        <span class="paragraph"><span>사용자에게</span><span>아름답고</span></span>
        <span class="paragraph"><span>편안한</span><span>웹</span><span>경험을</span></span>
        <span class="paragraph"><span>제공하기 위해</span><span>노력합니다.</span></span>
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
        title:"Vue proj. : REIAS"
      },
      {
        percent: "100%",
        meta: "디자인,퍼블리싱,개발 / 2024",
        desc: `
          개인 Vue proj.로, OTT 서비스 ‘넷플릭스’를 벤치마킹해 제작했습니다. TMDB API로 영화 데이터를 가져와 섹션·장르별로 분류해 보여주며, 포스터 클릭 시 모달에서 이미지·제목·등급·평점·설명을 확인할 수 있습니다. 좋아요/싫어요 선택은 알림 메시지와 함께 로컬에 저장되어 유지됩니다.
        `,
        title:"Vue proj. : VUEFLIX"
      },
      {
        percent: "100%",
        meta: "디자인,퍼블리싱,개발 / 2025",
        desc: `
          개인 Vue proj.로, 날짜·시간·위치·날씨 정보를 제공하며 To-Do 기능을 통해 할 일을 등록하고 완료 처리할 수 있습니다.<br>
          ‘해야 할 일’과 ‘완료된 일’ 필터를 지원하며, 전체 삭제·선택 삭제·완료된 항목만 삭제 등 다양한 삭제 옵션을 구현해 사용자가 더욱 편리하게 작업 흐름을 관리할 수 있도록 구성했습니다.
        `,
        title:"Vue proj. : Todo APP"
      },
      {
        percent: "50%",
        meta: "퍼블리싱 / 2024",
        desc: `
          사이트의 마크업과 스타일링 전반을 담당했습니다. position: sticky를 활용해 스크롤에 반응하는 고정 UI를 구현했으며, 스크롤 위치에 따라 아이콘에 액티브 클래스를 적용해 애니메이션과 시각적 피드백을 강화했습니다.<br>
          또한 jQuery와 CSS를 활용해 다양한 인터랙션 요소를 직접 구현하며, 동적인 UI/UX 구성에 대한 이해도를 높인 proj.입니다.
        `,
        title:"라이더스 홈페이지"
      },
      {
        percent: "100%",
        meta: "퍼블리싱, UIUX디자인 / 2024",
        desc: `
          브랜드 ‘파이브앤플러스’의 감성과 정체성을 효과적으로 전달하기 위해 진행한 리디자인 개인 proj.입니다.
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
         SCSS, CSS, JavaScript, jQuery가 혼합된 환경에서 PHP 기반 코드를 이해하며 작업했고, 기획자·개발자와의 협업을 통해 효율적인 결과를 도출한 proj.입니다.
        `,
        title:"라이더스 셔틀예약"
      },
      {
        percent: "50%",
        meta: "퍼블리싱 / 2023",
        desc: `
          기존 쇼퍼 예약 사이트의 리디자인 proj.로, 기존 기능을 유지한 채 새로운 페이지를 구현했습니다. 마크업 구조를 변경하지 않으면서도 기존 JavaScript에서 사용하는 클래스와 아이디명을 그대로 유지해야 했고, 개발자와의 긴밀한 협업을 통해 코드 이해도를 높였습니다.<br>
          proj. 전반에서 코드 호환성과 효율성을 고려해 세심하게 작업한 퍼블리싱 proj.입니다.
        `,
        title:"2023 frieze 쇼퍼예약"
      },
      {
        percent: "60%",
        meta: "퍼블리싱, UIUX디자인 / 2021",
        desc: `
          국가과학난제도전 홈페이지 proj.에서 UI/UX 디자인과 퍼블리싱을 담당했습니다. 기획 단계부터 참여해 디자인을 진행하고, 마크업과 스타일을 하드코딩하여 개발자에게 전달한 뒤 PHP 문서 기반으로 수정 작업을 반복했습니다.<br>
          기획·디자인·퍼블리싱·개발 협업을 처음 경험한 의미 있는 proj.였습니다.
        `,
        title:"국가과학난제도전"
      }
    ]
  }
};
