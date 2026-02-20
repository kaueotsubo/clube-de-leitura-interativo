let contadorCliques = 0;
const botao = document.getElementById('botao-misterio');
const titulo = document.getElementById('titulo-principal');

const linkEstilo = document.getElementById('estilo');

if (botao && linkEstilo && titulo) {
    let contadorCliques = 0;
    
    botao.addEventListener('click', function() {
        contadorCliques++;

        if (contadorCliques === 1) {
            botao.innerText = "Tem certeza?";
        } else if (contadorCliques === 2) {
            botao.innerText = "Ultima tentativa... ";
        } else if (contadorCliques === 3) {
            linkEstilo.href = "css/invertido.css";
            titulo.innerText = "N Ã O H Á E S C A P A T Ó R I A";
            botao.innerText = "Socorro";
        }
    });
}


//codigo do fomuario

const botaoinscrever = document.getElementById('botao-inscrever');
const campnome = document.getElementById('nome');
const campemail = document.getElementById('email');
const mensagemfeedback = document.getElementById('mensagem-feedback');

if (botaoinscrever && campnome && campemail && mensagemfeedback) {
    
    function validarEmail(email) {
        return email.includes('@') && email.includes('.');
    }

    function mostrarMensagem(texto, tipo) {
        mensagemfeedback.textContent = texto;
        mensagemfeedback.className = 'mensagem-feedback ' + tipo;
        
        setTimeout(() => {
            mensagemfeedback.textContent = '';
            mensagemfeedback.className = 'mensagem-feedback';
        }, 5000);
    }

    botaoinscrever.addEventListener('click', function() {
        const nome = campnome.value.trim();
        const email = campemail.value.trim();
        
        if (nome === '') {
            mostrarMensagem('📝 Por favor, digite seu nome!', 'erro');
            campnome.focus();
            return;
        }
        
        if (email === '') {
            mostrarMensagem('📧 Digite seu e-mail!', 'erro');
            campemail.focus();
            return;
        }
        
        if (!validarEmail(email)) {
            mostrarMensagem('❌ E-mail não parece válido!', 'erro');
            campemail.focus();
            return;
        }
        
        mostrarMensagem(`✨ Bem-vindo ao clube, ${nome}! Verifique seu e-mail.`, 'sucesso');
        campnome.value = '';
        campemail.value = '';
    });

    // Enter para enviar
    campemail.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            botaoinscrever.click();
        }
    });
}

// VERIFICAÇÃO PARA O MENU MOBILE (existe em TODAS as páginas)
const botaoMenu = document.querySelector('.menu-mobile');
const menuLista = document.querySelector('.menu-lista');

if (botaoMenu && menuLista) {
    botaoMenu.addEventListener('click', function() {
        menuLista.classList.toggle('menu-aberto');
        
        if (menuLista.classList.contains('menu-aberto')) {
            botaoMenu.textContent = '✕';
        } else {
            botaoMenu.textContent = '☰';
        }
    });

    // Fecha menu ao clicar em link
    const linksMenu = document.querySelectorAll('.menu-item');
    linksMenu.forEach(link => {
        link.addEventListener('click', function() {
            menuLista.classList.remove('menu-aberto');
            if (botaoMenu) {
                botaoMenu.textContent = '☰';
            }
        });
    });
}

// BÔNUS: Sayori só existe no index.html
const sayori = document.getElementById('Sayori');
if (sayori) {
    sayori.addEventListener('mouseenter', function() {
        console.log('Sayori está feliz!');
    });
}