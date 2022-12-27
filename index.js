const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
let logo = document.getElementById('logo')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');

});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open'); 
    })
})


