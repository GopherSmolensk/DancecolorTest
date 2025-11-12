document.addEventListener('DOMContentLoaded', function() {
    // console.log('Script loaded!');
    
    const burger = document.getElementById('burger');
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    const body = document.body;

    // console.log('Burger element:', burger);
    // console.log('Menu element:', fullscreenMenu);

    function toggleMenu() {
        // console.log('Toggle menu function called');
        
        burger.classList.toggle('active');
        fullscreenMenu.classList.toggle('active');
        
        if (fullscreenMenu.classList.contains('active')) {
            body.style.overflow = 'hidden';
            // console.log('Menu opened - burger should be visible');
        } else {
            body.style.overflow = '';
            // console.log('Menu closed');
        }
    }

    // Обработчик клика по бургеру
    burger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        // console.log('Burger clicked');
        toggleMenu();
    });

    // Закрытие меню при клике на пункт меню
    const menuItems = document.querySelectorAll('.fullscreen-menu .content-list li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log('Menu item clicked - closing menu');
            toggleMenu();
        });
    });

    // Закрытие меню при нажатии Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && fullscreenMenu.classList.contains('active')) {
            console.log('Escape pressed - closing menu');
            toggleMenu();
        }
    });
});

// Перемещение right-block между услуги и экскурсии на мобильных
function rearrangeForMobile() {
    const rightBlock = document.querySelector('.right-block');
    const servicesItem = document.querySelector('.content-arrow');
    const leftList = document.querySelector('.content-list.left');
    
    if (window.innerWidth <= 400) {
        // Вставляем right-block после "Услуги"
        if (servicesItem && rightBlock && !rightBlock.classList.contains('moved')) {
            servicesItem.parentNode.insertBefore(rightBlock, servicesItem.nextSibling);
            rightBlock.classList.add('moved');
        }
    } else {
        // Возвращаем на место
        if (rightBlock && rightBlock.classList.contains('moved')) {
            const container = document.querySelector('.container');
            const verticalDivider = document.querySelector('.vertical-divider');
            container.insertBefore(rightBlock, verticalDivider.nextSibling);
            rightBlock.classList.remove('moved');
        }
    }
}

// Запускаем при загрузке и изменении размера
window.addEventListener('load', rearrangeForMobile);
window.addEventListener('resize', rearrangeForMobile);