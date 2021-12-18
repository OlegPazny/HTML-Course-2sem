var scroll_btnElem=document.querySelector(".scroll_btn");
window.addEventListener('scroll',function(){
    var scroll=document.querySelector('.scroll_btn');
    scroll.classList.toggle("active", window.scrollY>500)
})
scroll_btnElem.addEventListener("click",function scrollTopTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})