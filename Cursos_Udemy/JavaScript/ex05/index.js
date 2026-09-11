/**
 * Objetivo: o usuário digita uma tarefa num campo de texto, aperta um botão "Adicionar", e a tarefa aparece numa lista embaixo. A cada nova tarefa adicionada, ela deve aparecer abaixo das anteriores (sem apagar as que já estavam lá).
 */

const form = document.querySelector('.form');
const tarefas = document.querySelector('.tarefas');

function enviado(evento) {
    evento.preventDefault();
    const tarefa = form.querySelector('.lista');
    tarefas.innerHTML += `<p>${tarefa.value}</p>`;
    tarefa.value = '';

}
form.addEventListener('submit', enviado);
