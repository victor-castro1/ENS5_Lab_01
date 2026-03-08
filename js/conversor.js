// variavel declarada fora da função - parte do desafio de escopo
// toda vez que clicar ela vai ser sobrescrita com o novo valor
var resultadoAnterior;

// quando clicar no botão, essa função roda
document.getElementById("btnConverter").onclick = function() {

    // pegando o campo de input e a div do resultado
    const input = document.getElementById("celsius");
    const divResultado = document.getElementById("resultado");

    // pegando o valor que o usuario digitou
    const celsius = input.value;

    // fazendo a conta: F = (C * 9/5) + 32
    const fahrenheit = (celsius * 9 / 5) + 32;

    // jogando o resultado pra dentro da div
    divResultado.innerHTML = celsius + "°C equivale a " + fahrenheit + "°F";

    // atualizando a variavel de fora (desafio de escopo)
    // ela nao some, só troca de valor a cada clique
    resultadoAnterior = fahrenheit;
    console.log("ultimo resultado calculado: " + resultadoAnterior);

}