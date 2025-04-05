console.log(true && true); //True - Ambas precisam ser verdadeiras (AND)

const expressao = true && true;
console.log(expressao);

const expressao_or = true || false;
console.log(expressao_or); //True - Apenas um valor precisa ser verdadeiro para ser verdade
console.log(false || false); //False
console.log(false || true || false || false);

const usuario = 'Luiz';
const senha = '1234';

const vaiLogar = usuario === 'Luiz' && senha === "1234";
console.log(vaiLogar); //Retorna true

console.log(!true); //Retorna false, negando o verdadeiro
console.log(!!true); //Retorna para o valor original

//AVALIAÇÃO DE CURTO CIRCUITO 
/**Qualquer valor da expressão booleana && que seja false literal ou falsy, ou seja, diferente de verdadeiro, vai retornar sempre o primeiro valor em falso 
 * da expressão apresentada
 * 
 * False (Literal)
 * Valores Falsy:
 * - Null
 * - "" (String vazia)
 * - NaN
 * - 0
 */

const expressão_and = "Luiz" && 0 && "Claudio"; //Retorna 0
console.log(expressão_and);
const expressão_and_2 = "Luiz" && "Claudio" && null; //Retorna null;
console.log(expressão_and_2);
const expressão_and_3 = "" && "Cláudio" && "Luiz"; //Retorna string vazia ""
console.log(expressão_and_3);
const expressão_and_4 = "Luiz" && NaN && "Claudio";
console.log(expressão_and_4);
const expressão_and_5 = "Luiz" && undefined && "Claudio" && NaN;

//Curto circuito proporciona otimização de escrita de linha de códigos
function falarOi(){
    console.log("Oi");
}

let vaiExecutarFuncao; //Variáveis não inicializadas em let por si só são underfined ou falso
vaiExecutarFuncao && falarOi(); //Não vai executar
!vaiExecutarFuncao && falarOi();



