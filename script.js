document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".news-section");
    const navItems = document.querySelectorAll(".nav-item");
    let currentSectionIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    let isAnimating = false;

    function showSection(index) {
        if (isAnimating || index < 0 || index >= sections.length) return;
        isAnimating = true;

        sections[currentSectionIndex].classList.remove("active");
        sections[index].classList.add("active");
        currentSectionIndex = index;

        navItems.forEach((item, i) => item.classList.toggle("active", i === index));
        
        setTimeout(() => {
            isAnimating = false;
        }, 300);
    }

    document.querySelector(".news-container").addEventListener("touchstart", e => {
        touchStartX = e.touches[0].clientX;
    });

    document.querySelector(".news-container").addEventListener("touchend", e => {
        touchEndX = e.changedTouches[0].clientX;
        const diffX = touchStartX - touchEndX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) showSection(currentSectionIndex + 1); // Свайп влево
            else showSection(currentSectionIndex - 1); // Свайп вправо
        }
    });

    navItems.forEach((item, index) => {
        item.addEventListener("click", () => showSection(index));
    });

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then(() => console.log("Service Worker зарегистрирован"))
            .catch(error => console.error("Ошибка SW:", error));
    }
});
