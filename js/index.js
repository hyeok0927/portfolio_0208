

window.onload = function(){
    AOS.init();
    //스크롤 내리면 header에 active 추가
    let header = document.querySelector(".header")
    window.addEventListener("scroll",function(){
        if(window.scrollY >= 100){
            header.classList.add("active")
        }else{
            header.classList.remove("active")
        }
    })
}

window.addEventListener("load",function(){
    let tabs = document.querySelectorAll(".project .slide-tabs li")
    let tabCont= document.querySelectorAll(".project .project-mo")
    for(let i = 0; i < tabs.length; i++)
    {
        tabs[i].onclick = function(){
            for(let j = 0; j < tabs.length; j++){
                tabs[j].classList.remove("active")
                tabCont[j].classList.remove("active")
            }
            this.classList.add("active")
            tabCont[i].classList.add("active")
        }
    }
})
var typed = new Typed('#home-text', {
    strings: ['첫번째 글자', '&amp; 두번째 글자'],
    typeSpeed: 100,
    cursorChar : "_",
    loop : true,
    fadeOut: true,
  });
  //skill
  
// window.onload = function(){}는 1번만 사용가능 
// script파일 2개이상일때
// window.addEventListener('load', function(){});