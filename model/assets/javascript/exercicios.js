/**Calcular o IMC com base nos seguintes critérios
 * Menos do que 18.5 --> Abaixo do peso
 * Entre 18.5 e 24.9 --> Peso normal
 * entre 25 e 29.9 --> Sobrepeso
 * Entre 30 e 34.9 --> obesidade grau 1
 * Entre 35 e 39.9 --> obesidade grau 2
 * Mais do que 40 --> Obesidade grau 3
*/

let peso = prompt("Qual o seu peso? ");
let altura = prompt("Qual a sua altura? ");

const PESO_NUMERO = parseFloat(peso);
const ALTURA_NUMERO = parseFloat(altura);

let CalcularIMC = PESO_NUMERO / (ALTURA_NUMERO*ALTURA_NUMERO);
let imc = CalcularIMC.toFixed(2);

if(imc < 18.5){
    alert("Abaixo do peso");
    alert(`Seu IMC é ${imc}`);
}else if(imc >= 18.5 && imc<=24.9){
    alert("Peso Normal");
    alert(`Seu IMC é ${imc}`);
}else if(imc >= 25 && imc < 29.9){
    alert("Sobrepeso");
    alert(`Seu IMC é ${imc}`);
}else if(imc >= 30 && imc <= 34.9){
    alert("Obesidade grau 1");
    alert(`Seu IMC é ${imc}`);
}else if(imc >= 35 && imc <=39.9){
    alert("Obesidade grau 2");
    alert(`Seu IMC é ${imc}`);
}else{
    alert("obesidade grau 3");
    alert(`Seu IMC é ${imc}`);
}
