const navToggle = document.querySelector('.subnavbtn');
const navbar = document.querySelector('.subnav');
const topnav = document.querySelector('.top-bar');
const banner = document.querySelector('.header-banner');


navToggle.addEventListener('click', () =>{
    topnav.classList.toggle('add-border');
    banner.classList.toggle('show-banner');
    navbar.classList.toggle('show');
});
