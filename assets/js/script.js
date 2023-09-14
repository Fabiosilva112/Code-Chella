function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src="/assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src="/assets/img/close_white_36dp.svg";
    }
}


let ingresso = document.querySelector(".ingresso");
let setor = document.querySelector(".setor");
let data = document.querySelector(".data");
let local = document.querySelector(".local");

let ingreNome = document.querySelector(".ingre-name");
let ingreEmail = document.querySelector(".ingre-email");
let ingreSetor = document.querySelector(".ingre-setor");
let ingreData = document.querySelector(".ingre-data");
let ingreLocal = document.querySelector(".ingre-local");




function enviarIngresso() {
    let titulo = document.querySelector(".tiketAdhered-title")   
    let nome = document.querySelector(".nome");
    nome.innerHTML = "Fabio Silva"
    titulo.innerHTML = "Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!"
    
}