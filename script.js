//5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

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
        novoLi.innerHTML = digitarInput.value;
        digitarInput.value = '';
    }
}


//adicionar o escutar do click do botão para criar a função de criar tarefa
btnCriarTarefa.addEventListener('click', criarTarefa());
//chamar a função
criarTarefa();



//7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)