// ? :

const pontuacao = 999;
if(pontuacao >= 1000){
    console.log("Usuário VIP");
}else{
    console.log("Usuário Normal");
}

//OPERADOR TERNÁRIO
const nivelUsuario = pontuacao >= 1000 ? "Usuário VIP" : "Usuario Normal";
console.log(nivelUsuario);

/**
 * ? --> Se
 * : --> Se não
 * 
 */
