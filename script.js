//CORRETO 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
//Eu segui a lógica do exemplo do último exercício do conteúdo
//onde será digitado
let digitarInput = document.querySelector('#texto-tarefa');
//onde está o botão
let btnCriarTarefa = document.querySelector('#criar-tarefa');
//onde vai aparecer a tarefa
let listaTarefa = document.querySelector('#lista-tarefas');
//criar a função 
function criarTarefa (){
    if (digitarInput.value.length > 0){
        let novoLi = document.createElement('li');
        listaTarefa.appendChild(novoLi);
        novoLi.id = 'novoLi';
        novoLi.innerHTML = digitarInput.value;
        digitarInput.value = '';
    }   
}
//adicionar o escutador para quando executar click do botão para executar a função de criar tarefa
btnCriarTarefa.addEventListener('click', criarTarefa);
//chamar a função
criarTarefa();
//7 - Clicar em um item da lista deve alterar alterar para a classe selected e mudar a cor de fundo do item para cinza rgb(128,128,128)
//onde está a classe selected
// let selected = '';
//onde está o item da lista
let novoLi = document.querySelector('#novoLi');
let corNova = rgb(128,128,128);
// function bgLista (event){
//     for (let i = 0;  i < selected.length;)
// }
function pintar(event){

    if(event.target.previousElementSibling !== null){
        event.target.style.backgroundColor = '';
        event.target.style.backgroundColor = corNova;
        event.target.nextElementSibling.style.backgroundColor = '';

    } else {
        event.target.style.backgroundColor = corNova;
        event.target.nextElementSibling.style.backgroundColor = '';
    }
}
novoLi.addEventListener('click',pintar);
pintar();

// let corAntiga = 'white';
// let corNova = rgb(128,128,128);
// function bgLista (){
//     if (novoLi.style.backgroundColor === corAntiga) {
//         novoLi.style.backgroundColor = corNova;
//       } 
// }



//adicionar o escutador para quando clicar no item da lista para executar a função de mudar o background
// novoLi.addEventListener('click', bgLista);
//chamar a função
// bgLista();

