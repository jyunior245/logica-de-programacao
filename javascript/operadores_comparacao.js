console.log(10 <5); //Retorna um valor falso
console.log(10 > 5); //A linguagem retorna um valor verdadeiro

//Maior que
const comparacao = 5 > 2;
console.log(comparacao); //True

const comparacao_2 = 10>=5; 
console.log(comparacao_2); //True mesmo não sendo igual, pois é maior 

const comparacao_3 = 10>=11;
console.log(comparacao_3) //False, ambas as comparações são falsas
console.log(`${typeof(comparacao_3)}`);

const num1 = 10;
const num2 = 11;
const comparacao_4 = num1 < num2;
const comparacao_5 = num1 <= num2;
const comparacao_6 = num1 > num2;
const comparacao_7 = num1 >= num2;
console.log("Comparações de 4 a 6");
console.log(comparacao_4);
console.log(`${comparacao_5}\n${comparacao_6}\n${comparacao_7}`);

//Comparação de igualdade
const comparacao_9 = num1 == num2;

//Correção de Tipos
const num_3 = 10; //Number
const num_4 = '10'; //String

const comparacao_10 = num_3 == num_4; //True, mas é falso, pois são tipos diferentes
const comparacao_11 = num_3 === num_4; //false (Valor + Tipo)
console.log(comparacao_10);
console.log(comparacao_11);

const num_5 = 20;
const num_6 = 20;
const comparacao_12 = num_5 == num_6; //True
const comparacao_13 = num_5 ===  num_6 //True

console.log(`${comparacao_12}\n${comparacao_13}`);

//Melhor solução para correção de tipos: Converter tudo para number

//Negação
const comparacao_14 = num_3!=num_4; //False
const comparacao_15 = num_3!==num_4 //True
console.log(`${comparacao_14}\n ${comparacao_15}`);






