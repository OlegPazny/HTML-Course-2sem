let scroll_btnElem=document.querySelector(".scroll_btn");//отслеживание класса в документе

window.addEventListener('scroll', visible)//регистрация обработчика события (щелчок мыши) у кнопки

function visible(){
    let scroll=document.querySelector('.scroll_btn');
    scroll.classList.toggle("active", window.scrollY>500)//добавление класса active при прокрутке страницы на 500 пикселей
}
scroll_btnElem.addEventListener("click", scrollTopTop)

function scrollTopTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'//плавная прокрутка
    })
}