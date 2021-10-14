/*let valor1 = parseInt(gets('25'));
let valor2 = parseInt(gets('100'));
let valor3 = parseFloat(gets('5.50'));





let total = valor1 * valor3 */

/*console.log(`O salario do colaborador é U$${total}, e a quantidade de horas trabalhadas é ${valor1}, o total por horas trabalhados na semana ${valor2}.`)*/


let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());

// Escreva o seu código aqui
/*let total =  valor3 * valor2
typeof valor3.toFixed(2)
let arredondado = Number(valor3.toFixed(2))
console.log(`NUMBER = ${valor1}`)
console.log(`SALARY = U$ ${total}`) */
let total =  valor3 * valor2
let final = Math.round((total * 10) / 10).toFixed(2)// para adicionar duas casa decimais.
console.log(`NUMBER = ${valor1}`)
console.log(`SALARY = U$ ${final}`)