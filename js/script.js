/* creating button click show hide navbar */
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");
togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle('open');
})
var Typed=new Typed(".input",{
    strings:["Frontend Developer","UX Designer","Web Developer"],
    TypedSpeed: 70,
    backSpeed: 55,
    loop: true
})