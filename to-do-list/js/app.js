'use strict'

const statusParagraph = document.getElementById('status');

const todoAdd = document.getElementById('todo-add');

const todolist = document.getElementById('todolist');
console.log(todolist);

const todos = [];

todoAdd.addEventListener('keydown', addTodo);//onclick

//Fonctions

function addTodo(e) {
    if (e.key === "Enter") {
        const todo = todoAdd.value;
        todos.push(todo);

        insertTodos();

        console.log(todos)//suppr


        todoAdd.value = "";
        
    }
    updateStatus();
}

function updateStatus() {
    if (todos.length > 0) {
        statusParagraph.style.display = "none";
    }
    else {
        statusParagraph.style.display = "block";
    }
}

function insertTodos() {

    //création balise
    const liElement = document.createElement('li');
    //ajout de classe 'todo' (<li class="todo"></li>)
    liElement.classList.add('todo');
    //Ins"rer du texte
    const task = todos[todos.length - 1];
    liElement.innerHTML = task;
    console.log(liElement);

    todolist.append(liElement);


}