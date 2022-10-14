'use strict';

// Selectors
const todoInput = document.querySelector('#todo-input');
const todoSubmit = document.querySelector('#todo-submit');
const todoList = document.querySelector('#tasks');


// Eventlisteners
todoSubmit.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteEdit);


// Functions
function addTodo(e) {
    // Create task
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('task')
    todoList.appendChild(todoDiv);


    // Create content div
    const newTodo = document.createElement('div');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('content');

    // Create action buttons
    const actionButtons = document.createElement('div');
    actionButtons.classList.add('actions');

    const editButton = document.createElement('button');
    editButton.classList.add('done');
    editButton.innerHTML = '✔️';

    const trashButton = document.createElement('button');
    trashButton.classList.add('delete');
    trashButton.innerHTML = 'Delete';

    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(actionButtons);
    actionButtons.appendChild(editButton);
    actionButtons.appendChild(trashButton);

    // Clear todo input value after submitting
    todoInput.value = '';

    // Prevent form from submitting
    e.preventDefault();

}

function deleteEdit(e) {
    if (e.target.name == 'done') {
        doneTodo(e)
    } else if (e.target.name == 'delete') {
        deleteTodo(e)
    }

    
}