//CORRETO 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo
//Eu segui a lógica do exemplo do último exercício do conteúdo
//onde será digitado
var digitarInput = document.querySelector('#texto-tarefa');
//onde está o botão
var btnCriarTarefa = document.querySelector('#criar-tarefa');
//onde vai aparecer a tarefa
var listaTarefa = document.querySelector('#lista-tarefas');
//criar a função 
function criarTarefa (){
    if (digitarInput.value.length > 0){
        var novoLi = document.createElement('li');
        listaTarefa.appendChild(novoLi);
        novoLi.innerHTML = digitarInput.value;
        digitarInput.value = '';
        novoLi.addEventListener('click',bgLista);
       
    }
    
}
//adicionar o escutador para quando executar click do botão para executar a função de criar tarefa
btnCriarTarefa.addEventListener('click', criarTarefa);
//chamar a função
criarTarefa();
//7 - Clicar em um item da lista deve alterar alterar para a classe selected e mudar a cor de fundo do item para cinza rgb(128,128,128)
//selected é uma classe que está definir o backgroundColor
//onde está o item da lista

function bgLista (event){
    let novoLi = document.querySelectorAll('li');
        for (let i = 0;  i < novoLi.length; i += 1){
    
            var listaLi = novoLi[i].innerHTML;
            
            // if (listaLi !== event.target.innerHTML){
                if(novoLi[i].className == 'selected'){
                    novoLi[i].classList.remove('selected');
                // }
            }else {
                event.target.classList.add('selected');
            }
        } 
    } 
  
//adicionar o escutador para quando clicar no item da lista para executar a função de mudar o background
// document.querySelectorAll('li').addEventListener('click', bgLista);
// listaTarefa.innerHTML.addEventListener('click', bgLista);
//chamar a função



// let selected = '';
// // let completed = [];
// let corNova = rgb(128,128,128);
// function bgLista (event){
//     for (let i = 0;  i < selected.classList.length; i += 1){

//     }
// }


// let corAntiga = 'white';
// let corNova = rgb(128,128,128);
// function bgLista (){
//     if (novoLi.style.backgroundColor === corAntiga) {
//         novoLi.style.backgroundColor = corNova;
//       } 
// }





// novoLi.id = 'novoLi';