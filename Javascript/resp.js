hamburger=document.querySelector(".hamburger")
navbar=document.querySelector(".navbar")
logo=document.querySelector(".logo")
nav=document.querySelector(".nav")


hamburger.addEventListener('click',()=>{
    navbar.classList.toggle("h-nav")
    nav.classList.toggle("visiblity-class")
    logo.classList.toggle("visiblity-class")



});