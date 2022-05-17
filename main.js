document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('display');
});

ScrollReveal().reveal('header', {delay:250});
ScrollReveal().reveal('.bg-image', {delay:600});
ScrollReveal().reveal('#title-destacados', {delay:250});
ScrollReveal().reveal('.cards', {delay:600});
ScrollReveal().reveal('.metodos', {delay:500});
ScrollReveal().reveal('.title-nosotros', {delay:350});
ScrollReveal().reveal('.parrafo', {delay:600});
ScrollReveal().reveal('.video', {delay:850});
ScrollReveal().reveal('.title-contacto', {delay:350});
ScrollReveal().reveal('.group-contacto', {delay:600});