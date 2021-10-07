/*function soma(n1, n2){
    return n1 + n2;
}*/

//alert(soma(5, 10));

var validar;
function validaIdade(idade){
    validar;
    if(idade >= 18){
        validar = true
    
    }else{
        validar= false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);