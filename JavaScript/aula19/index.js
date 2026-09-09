/**
 * primitivos(imútaveis) - string. boolena, null, undefine - valores copiados
 * 
 * referência - Array, Object e function - Passados por referÊncia
 */

// Nesse aqui a variavel a recebe uma copia da primeira variavel com o let
let a = 'André';
b = a
console.log(a, b) // André André
a = 'Duda'
console.log(a, b) //Duda André, nesse cenário o dado b não mudou pq era só uma cópia

// Nesse cenario de array tanto o C e D apontam para o mesmo local da memória, não sendo uma cópia
let c = [1,2, 3]
let d = c
console.log(c, d) //[ 1, 2, 3 ] [ 1, 2, 3 ]
c.push(5)
console.log(c, d) //[ 1, 2, 3, 5 ] [ 1, 2, 3, 5 ]