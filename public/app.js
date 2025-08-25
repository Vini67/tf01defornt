

document.addEventListener("DOMContentLoaded", async () => {

    const toDos = [
        "Estudar HTML semântico",
        "Praticar CSS básico",
        "Revisar seletores CSS",
        "Montar página com Flexbox",
        "Adicionar responsividade com media queries",
        "Estudar JavaScript básico",
        "Praticar manipulação do DOM",
        "Implementar evento de clique em botão",
        "Criar lista dinâmica com JS",
        "Estudar funções em JavaScript",
        "Aprender sobre arrays e objetos",
        "Praticar laços (for, while)",
        "Estudar fetch() e requisições HTTP",
        "Consumir API simples (ex: Pokédex)",
        "Criar mini-projeto integrando tudo"
    ];

    const buttonListAddElement = document.getElementsByClassName("btn")[0];

    buttonListAddElement.addEventListener("click", (event) => {
        event.preventDefault();

        // Adicionar event

    });

    // Codar aqui

const todos = ["Estudar JS", "Fazer exercício", "Descansar"];


const listWrapper = document.getElementById('list-wrapper');
const input = document.getElementById('list-add');
const addBtn = document.querySelector('.btn');


const ul = document.createElement('ul');


function createLi(text) {
  const li = document.createElement('li');
  li.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Deletar';

  
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  return li;
}


todos.forEach(todo => {
  ul.appendChild(createLi(todo));
});

listWrapper.appendChild(ul);


addBtn.addEventListener('click', () => {
  const newTodo = input.value.trim();

  if (newTodo === '') return; 

  ul.appendChild(createLi(newTodo));
  input.value = ''; 
});



});