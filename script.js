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

// Анимация заголовка при скролле карточек
const header = document.querySelector('.header');
const headerTitle = document.querySelector('.header-title');
let lastScrollTop = 0;
const headerMinHeight = 50;  // Минимальная высота заголовка (в пикселях)
const headerMaxHeight = 140; // Исходная высота заголовка

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > lastScrollTop) {
        // Скроллим вниз – уменьшаем заголовок
        header.style.height = `${headerMinHeight}px`;
        headerTitle.style.transform = 'translateY(-50%) scale(0.5)';
        headerTitle.style.top = '50%';
    } else {
        // Скроллим вверх – восстанавливаем заголовок
        header.style.height = `${headerMaxHeight}px`;
        headerTitle.style.transform = 'translateY(0) scale(1)';
        headerTitle.style.top = 'auto';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Не позволяем значению быть отрицательным
});

//Добавь условие исчезания новостных карточке после пересечения нижней границы заголовка
