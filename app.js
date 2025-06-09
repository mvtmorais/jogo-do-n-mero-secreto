let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNAleatorio();
let tentativas = 1;

function exibirTextonatela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMenssagemInicial () {
    exibirTextonatela('h1', 'Jogo do número secreto.');
    exibirTextonatela('p' , `Por favor, escolha um número de 1 a ${numeroLimite}.`);
}

exibirMenssagemInicial ();

function verificarChute () {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextonatela('h1', 'Você acertou!.');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let fraseAcerto = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`
        exibirTextonatela('p' , fraseAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextonatela('h1', 'Você errou!.');
            exibirTextonatela('p' , 'O número secreto é menor que o da sua escolha.');
        } else {
                exibirTextonatela('h1', 'Você errou!.');
                exibirTextonatela('p' , 'O número secreto é maior que o da sua escolha.');
        }
    } tentativas++;
    limparCampo ();
}

function gerarNAleatorio () {
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNAleatorio ();
    } else { 
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNAleatorio ();
    limparCampo ();
    tentativas = 1;
    exibirMenssagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}