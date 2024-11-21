/* creating button click show hide navbar */
var menu=document.querySelector(".menu");
var nav=document.querySelector(".menu-texto");
var links=document.querySelector(".menu-texto li");
menu.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle('open');
})
var Typed=new Typed(".input",{
    strings:["Saracura Três Potes","Folclore","Ribeirão Corrente, Cidade de Minha Vida","João de Barro... Um Tesouro Valioso"],
    TypedSpeed: 50,
    backSpeed: 55,
    loop: true
})