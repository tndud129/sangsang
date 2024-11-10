document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = document.querySelectorAll('.split-text');

    textElements.forEach((element, index) => {
        element.innerHTML = element.textContent.split('').map(char => 
            `<span class="char" ${index === 1 ? 'style="color: #fff;"' : ''}>${char}</span>`
        ).join('');

        const chars = element.querySelectorAll('.char');
        
        gsap.from(chars, {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.02,
            delay: index * 0.2
        });
    });

    gsap.from('.mainText h3', {
        y: -50,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: "power2.out"
    });
});