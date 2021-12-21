//CORRETO 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
//Eu segui a lógica do exemplo do último exercício do conteúdo
//onde será digitado
var digitarInput = document.querySelector('#texto-tarefa');
//onde está o botão
var btnCriarTarefa = document.querySelector('#criar-tarefa');
//onde vai aparecer a tarefa
var listaTarefa = document.querySelector('#lista-tarefas');
//onde está o botão apagar tudo
let btnApagarTudo = document.querySelector("#apaga-tudo");
//criar a função 
function criarTarefa (){
    //se tamanho do valor digitado no input for maior que 0
    if (digitarInput.value.length > 0){
    //cria um li, que será filho de listaTarefa
        var novoLi = document.createElement('li');
        listaTarefa.appendChild(novoLi);
    //o conteúdo do novoLi será igual ao conteúdo digitado no input
        novoLi.innerHTML = digitarInput.value;
    //depois que criar o novoLi, o input deve ficar vazio
        digitarInput.value = '';
    //o escutador está dentro para eu conseguir utilizar o novoLi criado
        novoLi.addEventListener('click',bgLista);
        btnApagarTudo.addEventListener('click', removerLi);
    }
    
}
//adicionar o escutador para quando executar click do botão para executar a função de criar tarefa
btnCriarTarefa.addEventListener('click', criarTarefa);
//chamar a função
criarTarefa();

//função para mudar a cor do novoLi quando for clicado, não posso mudar a cor de mais de um li
//tive ajuda de josé wilson
function bgLista (event){
    //onde está o item da lista. vou percorrer todos esses itens
    let novoLi = document.querySelectorAll('li');
        for (let i = 0;  i < novoLi.length; i += 1){
    
            var listaLi = novoLi[i].innerHTML;
            
            // if (listaLi !== event.target.innerHTML){
    //selected é uma classe que está definir o backgroundColor
    //se o novoLi tiver classe selected, deve remover, caso contrário, deve adicionar
                if(novoLi[i].className == 'selected'){
                    novoLi[i].classList.remove('selected');
                // }
            }else {
                event.target.classList.add('selected');
            }
        } 
    } 
//o escutador está na função anterior
//chamar a função
bgLista();

// // let completed = [];

//quando apertar o botão "Apaga tudo", apagar todos os li
function removerLi (){
    let novoLi = document.querySelectorAll('li');
    for (let i = 0; i < novoLi.length; i += 1){
        novoLi[i].remove();
    }
}
//segunda forma de fazer
// function removerLi (){
//     var listaTarefa = document.querySelector('#lista-tarefas');
//    listaTarefa.innerHTML = '';

