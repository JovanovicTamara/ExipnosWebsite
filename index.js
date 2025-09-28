let burger = document.querySelector('.burger');
let navbarItems = document.querySelector('.navbar-items');
let navLinks = document.querySelectorAll('.navbar-items ul a');

burger.addEventListener('click', (e) => {
    e.preventDefault(); // ⬅️ stops page from jumping to top
    navbarItems.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarItems.classList.remove('active');
    });
});
