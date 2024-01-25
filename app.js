let botaoChute = document.querySelectorAll(".container__botao");
let input = document.querySelector(".container__input");  //""
const limitador = 3;
let tentativas = 1;
let numerosRepetidos = [];
input.max = limitador
let numeroSecreto = geradorNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerText = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p", `Escolha um numero entre 0 a ${limitador}`);
}

exibirMensagemInicial();

function linparCampo() {
    document.querySelector(".container__input").value = "";
}

function geradorNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * limitador + 1);
    let quantidadeElementoLista = numerosRepetidos.length;
    if (quantidadeElementoLista == limitador) {
        numerosRepetidos = [];
    } else if (numerosRepetidos.includes(numeroAleatorio)) {
        return geradorNumeroAleatorio();
    } else {
        numerosRepetidos.push(numeroAleatorio);
        console.log(numerosRepetidos)
        return numeroAleatorio;
    }
}




console.log(numeroSecreto);
botaoChute[0].onclick = () => {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    if (parseInt(input.value) === numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!!");
        exibirTextoNaTela("p", `Muito bem, o numero secreto e ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (numeroSecreto > input.value) {
        linparCampo()
        exibirTextoNaTela("h1", "Errou!!");
        exibirTextoNaTela("p", `O numero secreto e maior.`);
    } else {
        linparCampo()
        exibirTextoNaTela("h1", "Errou!!");
        exibirTextoNaTela("p", `O numero secreto e menor.`);
    }
    ++tentativas
}


botaoChute[1].onclick = () => {
    linparCampo()
    numeroSecreto = geradorNumeroAleatorio();
    exibirMensagemInicial()
    document.getElementById("reiniciar").setAttribute("disable", true);
}