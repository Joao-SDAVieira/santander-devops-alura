alert('Olá Mundo');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 0;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}!`);
    tentativas ++;
    if (numeroSecreto == chute){
        alert(`Isso aí, você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativas`);
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O numero secreto é menor que o chute: ${chute}`);
        } else{
            alert(`O numero secreto é maior que o chute: ${chute}`);
        }
    }
}

