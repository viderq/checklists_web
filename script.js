// Переключение категорий
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-item.active').classList.remove('active');
        item.classList.add('active');
    });
});

// Плавный скролл для навигации
const navScroll = document.querySelector('.nav-scroll');
let isDown = false;
let startX;
let scrollLeft;

navScroll.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - navScroll.offsetLeft;
    scrollLeft = navScroll.scrollLeft;
});

navScroll.addEventListener('mouseleave', () => isDown = false);
navScroll.addEventListener('mouseup', () => isDown = false);

navScroll.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - navScroll.offsetLeft;
    const walk = (x - startX) * 2;
    navScroll.scrollLeft = scrollLeft - walk;
});

// Анимация заголовка при скролле
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > lastScrollTop) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});