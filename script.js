if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
}

document.addEventListener("DOMContentLoaded", function() {
    const paths = document.querySelectorAll("svg path");
    paths.forEach((path) => {
        const pathLength = path.getTotalLength();
        gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
        const svgContainer = path.closest(".svg-container");
        if (svgContainer) {
            gsap.to(path, {
                strokeDashoffset: 0,
                scrollTrigger: {
                    trigger: svgContainer,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                    markers: false
                }
            });
        }
    });

 
        gsap.utils.toArray('p, h1, h2, h3, h4, h5, h6').forEach(el => {
            if (
                el.closest('.inicial, .copyright') ||
                el.closest('.funcion-scheduling, .funcion-vehicles, .funcion-register')
            ) return;
            gsap.fromTo(el,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        const cardClasses = [
            '.funcion-scheduling',
            '.funcion-vehicles',
            '.funcion-register'
        ];
        cardClasses.forEach((cls, idx) => {
            const card = document.querySelector(cls);
            if (card) {
                const children = card.querySelectorAll('i, h3, p');
                gsap.fromTo(children,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.15,
                        delay: idx * 0.5,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            }
        });
});