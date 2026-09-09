function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    //form.onsubmit = function (evento) {
    //    evento.preventDefault(); // Evita atualizar a pagina
    //    alert(1);
    //};

    // Jeito recomendado  
    let contador = 1;
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.nodeValue,
            sobrenome: sobrenome.ariaValueMax,
            peso: peso.ariaValueMax,
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();