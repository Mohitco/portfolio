//sidebar elementa//
const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');

menu.addEventListener('click', function() {
    sidebar.classList.add('open-sidebar');
})
