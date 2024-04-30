function exibirMensagem() {
    document.getElementById('resultado').innerText = "Alô Mundo";
}

function pedirNumero() {
    var numero = prompt("Digite um número:");
    document.getElementById('resultado').innerText = "O número informado foi " + numero;
}

function somaNumeros() {
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    var soma = num1 + num2;
    document.getElementById('resultado').innerText = "A soma dos números é: " + soma;
}

function calcularMedia() {
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));
    var nota3 = parseFloat(prompt("Digite a terceira nota:"));
    var nota4 = parseFloat(prompt("Digite a quarta nota:"));
    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    document.getElementById('resultado').innerText = "A média das notas é: " + media;
}

function converterMetrosParaCentimetros() {
    var metros = parseFloat(prompt("Digite o valor em metros:"));
    var centimetros = metros * 100;
    document.getElementById('resultado').innerText = metros + " metros equivalem a " + centimetros + " centímetros";
}

function calcularAreaCirculo() {
    var raio = parseFloat(prompt("Digite o raio do círculo:"));
    var area = Math.PI * Math.pow(raio, 2);
    document.getElementById('resultado').innerText = "A área do círculo é: " + area.toFixed(2);
}

function calcularAreaQuadrado() {
    var lado = parseFloat(prompt("Digite o lado do quadrado:"));
    var area = Math.pow(lado, 2);
    var dobroArea = area * 2;
    document.getElementById('resultado').innerText = "A área do quadrado é: " + area + ". O dobro desta área é: " + dobroArea;
}

function calcularSalario() {
    var valorHora = parseFloat(prompt("Digite quanto você ganha por hora:"));
    var horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
    var salario = valorHora * horasTrabalhadas;
    document.getElementById('resultado').innerText = "Seu salário neste mês é: R$ " + salario.toFixed(2);
}

function converterFahrenheitParaCelsius() {
    var fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
    var celsius = 5 * ((fahrenheit - 32) / 9);
    document.getElementById('resultado').innerText = fahrenheit + "°F equivalem a " + celsius.toFixed(2) + "°C";
}

function converterCelsiusParaFahrenheit() {
    var celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('resultado').innerText = celsius + "°C equivalem a " + fahrenheit.toFixed(2) + "°F";
}