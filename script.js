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

navScroll.addEventListener('mouseleave', () => {
    isDown = false;
});

navScroll.addEventListener('mouseup', () => {
    isDown = false;
});

navScroll.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - navScroll.offsetLeft;
    const walk = (x - startX) * 2;
    navScroll.scrollLeft = scrollLeft - walk;
});
