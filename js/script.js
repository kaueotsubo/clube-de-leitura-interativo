let contadorCliques = 0;
const botao = document.getElementById('botao-misterio');
const titulo = document.getElementById('titulo-principal');

const linkEstilo = document.getElementById('estilo');

botao.addEventListener('click', function(){
    contadorCliques ++;

    if(contadorCliques === 1){
        botao.innerText = "Tem certeza?";
    }
    else if(contadorCliques === 2){
        botao.innerText = "Não Clique de novo... ";
    }
    else if(contadorCliques === 3){

        linkEstilo.href = "css/invertido.css";

        titulo.innerText = "N Ã O H Á E S C A P A T Ó R I A";
        botao.innerText = "Socorro";
    }
})