// ==========================
// AGRINHO PARANÁ
// JAVASCRIPT PRINCIPAL
// ==========================

// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", () => {
    iniciarSite();
});

// Função principal
function iniciarSite() {
    configurarBotoes();
    exibirMensagemBoasVindas();
}

// ==========================
// BOTÕES
// ==========================

function configurarBotoes() {
    const botoes = document.querySelectorAll(".btn");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            console.log("Botão clicado!");
        });
    });
}

// ==========================
// MENSAGEM DE BOAS-VINDAS
// ==========================

function exibirMensagemBoasVindas() {
    console.log("Bem-vindo ao Projeto Agrinho Paraná!");
}

// ==========================
// ANIMAÇÃO DE ENTRADA
// ==========================

function animarElemento(elemento) {
    elemento.style.opacity = "0";

    setTimeout(() => {
        elemento.style.transition = "0.8s";
        elemento.style.opacity = "1";
    }, 100);
}

// ==========================
// VALIDAÇÃO DE FORMULÁRIO
// ==========================

function validarFormulario(nome, email) {

    if (nome.trim() === "") {
        return false;
    }

    if (email.trim() === "") {
        return false;
    }

    return true;
}

// ==========================
// EXEMPLO DE CONTADOR
// ==========================

let visitas = 0;

function contarVisita() {
    visitas++;
    console.log(`Número de visitas: ${visitas}`);
}
