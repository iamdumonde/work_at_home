'use strict'

const statusParagraph = document.getElementById('status');

const todoAdd = document.getElementById('todo-add');

const todolist = document.getElementById('todolist');
console.log(todolist);

const todos = [];

todoAdd.addEventListener('keydown', addTodo);//onclick

//Fonctions
/**
 * Cette fonction permet d'ajouter les tâches à chaque fois
 * @param {*} e 
 */
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

/**
 * Cette fonction permet d'afficher ou non le paragraphe 'aucune tâche planifiée'
 */
function updateStatus() {
    if (todos.length > 0) {
        statusParagraph.style.display = "none";
    }
    else {
        statusParagraph.style.display = "block";
    }
}


/**
 * Cette fonction est celle qui permet de créer de nouveaux li à chaque fois une nouvelle tâche est ajoutée
 */
function insertTodos() {
    //création balise
    const liElement = document.createElement('li');
    //ajout de classe 'todo' (<li class="todo"></li>)
    liElement.classList.add('todo', 'cercle', 'cercle::before');
    //Insérer du texte
    const task = todos[todos.length - 1];
    liElement.innerHTML = task;
    console.log(liElement);

    todolist.append(liElement);
}

//add a checked symbol
todolist.addEventListener('click', function(){
    console.log('click');
    
});

