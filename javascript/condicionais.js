const hora = 11.2;

if(hora <= 12){
    console.log("Bom dia");
}else{
    console.log("Boa tarde");
}

/**
 * se(Condição){
 *      trecho de bloco
 * }se não{
 *      trecho de bloco
 * }
 */
/**Sistema entre 0 a 11 --> Bom dia 
 * sistema entre 12 a 17 --> Boa tarde
 * 
 */

if(hora>=0 && hora <=11){
    console.log("bom dia");
}else if(hora>=12 && hora<=17){
    console.log("Boa tarde")
}else if(hora>=18 && hora<=23){
    console.log("Boa noite");
}

const numero = 10;

if(numero>=0 && numero <=5){
    console.log("O numero está entre 0 e 5");
}else if(numero >=6 && numero <=8){
    console.log("O número está entre 6 a 8");
}else if(numero >= 9 && numero <= 11){
    console.log("O número está entre 9 e 11");
}else{
    console.log("O número não está entre 0 e 11");
}