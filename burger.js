document.addEventListener('click', function(event) {
    // Получаем элементы меню и бургера
    const menu = document.getElementById('header_links');
    const burger = document.getElementById('burger');

    // Проверяем, был ли клик вне меню и бургера
    if (!menu.contains(event.target) &&!burger.contains(event.target)) {
        // Закрываем меню с анимацией
        menu.classList.remove('active');
        burger.classList.remove('active');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById('burger');
    const headerLinks = document.getElementById('header_links');

    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        headerLinks.classList.toggle('active');
        headerBtn.classList.toggle('active');
        langContainer.classList.toggle('active');
    });
});
