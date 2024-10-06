document.addEventListener('DOMContentLoaded', function() {
    const showBtn = document.querySelector('.btn-bars'); 
    const closeBtn = document.querySelector('.btn-close'); 
    const navMenu = document.querySelector('.navbar-collapse'); 

    showBtn.addEventListener('click', () => {
        navMenu.classList.add('showMenu');
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('showMenu');
    });
});

