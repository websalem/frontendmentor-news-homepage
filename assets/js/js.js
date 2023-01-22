const nav = document.querySelector('.nav-toggle');
const ul = document.querySelector('.site-nav');
const closeNav = document.querySelector('.menu-close');
const body = document.body;
window.addEventListener('click', (e) => {
    if (e.target == nav) {
        ul.classList.add('open-nav');
        body.classList.add('overlay');
    }
    else if ((e.target == closeNav) && (ul.classList.contains('open-nav') && body.classList.contains('overlay'))) {
        ul.classList.remove('open-nav');
        body.classList.remove('overlay');
    }
});