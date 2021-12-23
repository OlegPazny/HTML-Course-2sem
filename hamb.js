let hamb=document.querySelector(".hamb");//отслеживание класса в документе
let navMenu=document.querySelector(".nav__menu");
let body=document.body;

hamb.addEventListener("click", mobileMenu);//регистрация обработчика события (щелчок мыши) у кнопки

function mobileMenu(){
    hamb.classList.toggle("active");//добавление класса active для заданного селектора
    navMenu.classList.toggle("active");
    body.classList.toggle("noscroll");//при открытом меню невозможность скролла
}

const navLink=document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));//цикл, в котором при нажатии на любую из ссылок закрывается меню

function closeMenu(){
    hamb.classList.remove("active");//удаление класса active для заданного селектора
    navMenu.classList.remove("active");
}