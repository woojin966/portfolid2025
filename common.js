document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const animatedText = document.querySelector('.animated_text');
    const spans = animatedText.querySelectorAll('span');
    const hero = document.querySelector('.hero');
    const labels = document.querySelectorAll('.label');
    const projectLists = document.querySelectorAll('.project_list');
    const sections = document.querySelectorAll('section');
    const skillSection = document.querySelector('.skill_section'); // .skill_section
    const skillBox = document.querySelector('.skill_box'); // .skill_box
    const skillDivs = document.querySelectorAll('.skill'); // div.skill들

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
                    // markers: true
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
                // markers: true
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
            // markers: true
        },
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        onStart: () => {
            // skill_box가 위에서 아래로 나타나기 (3초 후)
            gsap.to(skillBox, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 3, // 3초 후에 나타남
                ease: "power3.out"
            });

            // skill_box 안에 있는 div.skill들이 위에서 아래로 펼쳐지기
            gsap.fromTo(skillDivs,
                {
                    opacity: 0,
                    y: -30,
                    rotation: () => Math.random() * 30 - 15, // 처음 위치에서 랜덤 회전 적용
                },
                {
                    scrollTrigger: {
                        trigger: skillBox,
                        start: "top 80%",
                        toggleActions: "play none none reverse", // 스크롤로 다시 들어오면 재실행
                        // markers: true,
                    },
                    opacity: 1,
                    y: 0,
                    //rotation: 0,
                    stagger: 0.15,
                    duration: 0.6, // ✅ 더 빠르게
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

    const triggerBtns = document.querySelectorAll('.trigger_btn');
  const contributionBoxes = document.querySelectorAll('.contribution_box');

  triggerBtns.forEach(function(btn) {
    btn.addEventListener('mouseenter', function() {
      // 모든 contribution_box에서 on 클래스 제거
      contributionBoxes.forEach(function(box) {
        box.classList.remove('on');
      });

      // 이 버튼과 관련된 contribution_box에 on 클래스 추가
      const contributionBox = this.parentElement.querySelector('.contribution_box');
      if (contributionBox) {
        contributionBox.classList.add('on');
      }
    });

    btn.addEventListener('mouseleave', function() {
      const contributionBox = this.parentElement.querySelector('.contribution_box');
      if (contributionBox) {
        contributionBox.classList.remove('on');
      }
    });
  });
});

