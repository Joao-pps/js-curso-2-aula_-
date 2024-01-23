let tituloH1 = document.querySelector("h1").innerText = "Jogo do numero secreto";
let paragrafo = document.querySelector("p").innerText = "Escolha um numero entre 0 a 10"

let botaoChute = document.querySelectorAll(".container__botao");
let input = document.querySelector(".container__input");  //""
let numeroAleatorio = parseInt(Math.random() * 10) + 1;

console.log(numeroAleatorio)

botaoChute[0].onclick = () => {
    if(input.value !== "") {
        let valorInput = parseInt(input.value);
        if(valorInput === numeroAleatorio) {
            alert("Parabens você acertou!");
        } else if(valorInput > numeroAleatorio) {
            alert(`O numero ${valorInput} que você escolheu e maior que o numero secreto`);
        } else if(valorInput < numeroAleatorio) {
            alert(`O numero ${valorInput} que você escolheu e menor que o numero secreto`);
        } else {
            alert("Você errou!");
        }

    } else {
        alert("Digite um numero");
    }
}

botaoChute[1].onclick = () => {
    location.reload(true)
}