const heroGradient = document.querySelector('.hero__gradient');
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

function updateParallax() {
    if (!heroGradient) return;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const offset = Math.min(scrollY / 8, 80);
    heroGradient.style.transform = `translate3d(0, ${offset * -0.6}px, 0)`;
}

function handleScroll() {
    updateParallax();
    const header = document.querySelector('.site-header');
    if (!header) return;
    const opacity = Math.min(0.85, 0.3 + window.scrollY / 400);
    header.style.background = `linear-gradient(180deg, rgba(27, 27, 27, ${opacity}) 0%, rgba(27, 27, 27, ${Math.max(0.2, opacity - 0.3)}) 100%)`;
}

function toggleNav() {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('is-open');
}

if (navToggle && navLinks) {
    navToggle.addEventListener('click', toggleNav);
    navLinks.addEventListener('click', event => {
        if (event.target.matches('a')) {
            navToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('is-open');
        }
    });
}

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('load', () => {
    updateParallax();
    document.body.classList.add('is-ready');
});
