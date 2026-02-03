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
});