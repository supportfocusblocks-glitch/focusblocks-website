// === SCROLL HEADER ===
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// === SCROLL TOP BUTTON ===
const scrollTop = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('show', window.scrollY > 500);
});
scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === FAQ ACCORDION ===
document.querySelectorAll('.faq__question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');
        // Fermer toutes les FAQ
        document.querySelectorAll('.faq__item').forEach(faq => faq.classList.remove('active'));
        // Ouvrir celle cliquée si elle n'était pas déjà ouverte
        if (!isActive) item.classList.add('active');
    });
});

// === MOBILE MENU ===
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// === ANIMATION AU SCROLL ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card, .step').forEach(el => {
    observer.observe(el);
});