/* ====================================================== */
/* FILE: public/js/main.js                              */
/* ====================================================== */
document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00BFFF" }, "shape": { "type": "circle" },
            "opacity": { "value": 0.6, "random": true }, "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#39FF14", "opacity": 0.3, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
            "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
        }, "retina_detect": true
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksMobile = document.querySelectorAll('#mobile-menu .nav-link');
    mobileMenuButton.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
    navLinksMobile.forEach(link => { link.addEventListener('click', () => { mobileMenu.classList.add('hidden'); }); });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = 'home';
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 150) { current = section.getAttribute('id'); }
        });
        if (current === 'services') {
            document.querySelectorAll('#ban, #unban, #crash').forEach(sec => {
                if (pageYOffset >= sec.offsetTop - 150) { current = sec.getAttribute('id'); }
            });
        }
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) { link.classList.add('active'); }
        });
    });

    ScrollReveal().reveal('.reveal-card', {
        delay: 200, distance: '50px', origin: 'bottom',
        interval: 100, easing: 'cubic-bezier(0.5, 0, 0, 1)'
    });
});
