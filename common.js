document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // ✅ Lenis 초기화
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false
      });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
            return arguments.length ? lenis.scrollTo(value) : window.scrollY;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.body.style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.defaults({ scroller: document.body });
    ScrollTrigger.refresh();

    const animatedText = document.querySelector('.animated_text');
    const spans = animatedText.querySelectorAll('span');
    const hero = document.querySelector('.hero');
    const labels = document.querySelectorAll('.label');
    const projectLists = document.querySelectorAll('.project_list');
    const sections = document.querySelectorAll('section');
    const skillSection = document.querySelector('.skill_section');
    const skillBox = document.querySelector('.skill_box');
    const skillDivs = document.querySelectorAll('.skill');

    let firstEntry = true;
    let currentTween = null;

    // ✅ Section 올라오는 애니메이션
    sections.forEach(section => {
        gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                overwrite: true
            }
        );
    });

    // ✅ Animated text 초기 세팅
    gsap.set(spans, { opacity: 0, y: 0 });
    gsap.set(labels, { opacity: 0, y: 20 });

    // ✅ project_list > li 스크롤 등장 애니메이션
    projectLists.forEach(group => {
        const items = group.querySelectorAll('li');
        gsap.set(items, { xPercent: 100, opacity: 0 });

        gsap.to(items, {
            scrollTrigger: {
                trigger: group,
                start: 'top 90%',
                toggleActions: 'restart none none none',
                invalidateOnRefresh: true,
            },
            xPercent: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power3.out'
        });
    });

    // ✅ skill_section 애니메이션
    gsap.fromTo(skillSection,
        { opacity: 0 },
        {
            scrollTrigger: {
                trigger: skillSection,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            onStart: () => {
                gsap.to(skillBox, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 3,
                    ease: "power3.out"
                });

                gsap.fromTo(skillDivs,
                    {
                        opacity: 0,
                        y: -30,
                        rotation: () => Math.random() * 30 - 15,
                    },
                    {
                        scrollTrigger: {
                            trigger: skillBox,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                        opacity: 1,
                        y: 0,
                        stagger: 0.15,
                        duration: 0.6,
                        ease: "power2.out",
                        overwrite: true
                    }
                );
            }
        }
    );

    // ✅ Intersection Observer: hero 텍스트 / label 애니메이션
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting) {
                if (target === hero) {
                    gsap.killTweensOf(spans);
                    gsap.set(spans, { opacity: 0, y: 0 });

                    const delay = firstEntry ? 500 : 100;
                    setTimeout(() => {
                        currentTween = gsap.to(spans, {
                            delay: 0,
                            duration: 1.5,
                            opacity: 1,
                            y: 0,
                            stagger: 0.1,
                            ease: "power3.out",
                        });
                    }, delay);

                    firstEntry = false;
                }

                if (target.classList.contains('label')) {
                    gsap.fromTo(target,
                        { opacity: 0, y: 20 },
                        { opacity: 1, y: 0, duration: 1, ease: "power3.out", overwrite: true }
                    );
                }
            }
        });
    }, {
        threshold: 0.1
    });

    // ✅ 관찰 시작
    observer.observe(hero);
    labels.forEach(label => observer.observe(label));

    const triggerBtns = document.querySelectorAll('.project_btn');

triggerBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        
        // 가장 가까운 li 찾아서 scope 제한하기
        const card = btn.closest('.project_card');
        if (!card) return;

        const contributionBox = card.querySelector('.contribution_box');
        if (!contributionBox) return;

        contributionBox.classList.add('on');
    });

    btn.addEventListener('mouseleave', () => {

        const card = btn.closest('.project_card');
        if (!card) return;

        const contributionBox = card.querySelector('.contribution_box');
        if (!contributionBox) return;

        contributionBox.classList.remove('on');
    });
});

    function syncNameSectionLeft() {
        const section = document.querySelector('.contact_section');
        const nameSection = document.querySelector('.name_section.bottom');

        if (section && nameSection) {
            const style = window.getComputedStyle(section);
            const paddingLeft = style.getPropertyValue('padding-left');

            nameSection.style.left = '-'+paddingLeft;
        }
    }

    window.addEventListener('DOMContentLoaded', syncNameSectionLeft);
    window.addEventListener('resize', syncNameSectionLeft);

    function updateNameImages() {
        const imgs = document.querySelectorAll('.name_section img');

        if (!imgs.length) return;

        const isMobile = window.innerWidth <= 480;

        imgs.forEach((img) => {
            const currentSrc = img.getAttribute('src');

            if (isMobile && currentSrc !== 'yejikim_mo.svg') {
                img.setAttribute('src', 'yejikim_mo.svg');
            } else if (!isMobile && currentSrc !== 'yejikim2.svg') {
                img.setAttribute('src', 'yejikim2.svg');
            }
        });
    }

    window.addEventListener('DOMContentLoaded', updateNameImages);
    window.addEventListener('resize', updateNameImages);

    // lenis-scrolling 감지 후 스크롤 실행
    function waitForLenisIdle(callback) {
        const body = document.body;

        if (!body.classList.contains("lenis-scrolling")) {
            callback();
            return;
        }

        const observer = new MutationObserver(() => {
            if (!body.classList.contains("lenis-scrolling")) {
                observer.disconnect();
                callback();
            }
        });

        observer.observe(body, {
        attributes: true,
        attributeFilter: ["class"]
        });
    }

    // 앵커 스크롤 이동
    const links = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector("header");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offset = header.offsetHeight;

                lenis.scrollTo(targetElement, {
                    offset: -offset,
                    immediate: false, // 부드럽게 스크롤
                });
            }
        });
    });

    // 로고 클릭 시 페이지 상단으로 이동
    const logo = document.querySelector(".logo");

    if (logo) {
        logo.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // lenis용 헤더 숨김/보임 처리
    let lastScroll = 0;
    let ticking = false;

    lenis.on("scroll", ({ scroll }) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScroll = scroll;

                if (currentScroll > 120) {
                    if (currentScroll > lastScroll) {
                        header.classList.add("hide");
                    } else {
                        header.classList.remove("hide");
                    }
                } else {
                    header.classList.remove("hide");
                }

                lastScroll = currentScroll;
                ticking = false;
            });

            // ticking = true;
        }
    });

    // index.html 스크롤위치 기억하기

        const savedScroll = sessionStorage.getItem('scrollY');
        if (savedScroll) {
            window.scrollTo(0, parseInt(savedScroll));
            sessionStorage.removeItem('scrollY'); // 복원 후 삭제
        }
});
