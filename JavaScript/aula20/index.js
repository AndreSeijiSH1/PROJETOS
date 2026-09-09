/**
 * - > maior que
- < menor que
- ≥= maior ou igual
- ≤= menor ou igual
- == igualdade entre valores (não muito recomendado usar)
- === igualdade estrita (valor e tipo)
- != diferente (Não muito recomendado usar)
- !== diferente estrito
 */
console.log(10 > 5); // Essa expressão vai mandar um valor booleano, retornando true ou false
console.log(10 >= 5); // Compara se 10 é maior ou igual 5, caso seja verdadeiro retorna true
console.log(10 >= 11); // nesse caso retornou false pq 11 é maior que 10
console.log(10 == 10);
/**
 * O sinal de == (igualdade) não é recomendado usar pq ele só analisa o valor, 
 * caso 10 (number) == '10' (string) forem comparados o console retorna como True 
 * mesmo sabendo que isso não é verdade
 */
console.log(10 != 10);
/**
 * Possui a mesma lógica do operador ==, ele só checa o valor
 */
console.log(10 !== 11); // Mais recomendado usar, o estrito analisa o valor e o seu tipo, evitando erros de comparar strings com numbers
console.log(10 === 10);