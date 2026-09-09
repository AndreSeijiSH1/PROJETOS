//Isso é um dicionário ou um ojeto
const pessoa1 = {
    nome: 'André',
    sobrenome: 'Shiroma',
    idade: 21,

    fala() {
        console.log(`${this.nome} está falando oi e tem ${this.idade} anos`)
    },
}
pessoa1.fala();

// Criando um objeto através da function
function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
const pessoa5 = criaPessoa('André', 'Shiroma', 21);
const pessoa2 = criaPessoa('Leticia', 'Ferreira', 20);
const pessoa3 = criaPessoa('Duda', 'Pimentel', 19);
const pessoa4 = criaPessoa('Makoto', 'Shiroma', 31);
console.log(pessoa2.nome, pessoa2.idade);