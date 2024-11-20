/* creating button click show hide navbar */
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");
togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle('open');
})
var Typed=new Typed(".input",{
    strings:["Saracura Três Potes","Folclore","Ribeirão Corrente, Cidade de Minha Vida","João de Barro... Um Tesouro Valioso"],
    TypedSpeed: 50,
    backSpeed: 55,
    loop: true
})