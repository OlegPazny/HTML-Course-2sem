let hamb=document.querySelector(".hamb");
let navMenu=document.querySelector(".nav__menu");
let body=document.body;

hamb.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("noscroll");
}

const navLink=document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
}