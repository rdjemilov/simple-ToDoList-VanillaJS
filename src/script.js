'use strict';

// Selecting elements

const form = document.querySelector('#new-task');
const newInput = document.querySelector('#new-task__input');
const newTaskSubmit = document.querySelector('#new-task__submit');
const tasksList = document.querySelector('.tasks-list');
const tasks = document.querySelector('#tasks');

eventListeners();

function eventListeners(e) { // All event listeners
    form.addEventListener('submit', addTodo);
}

function addTodo(e) {
    let newTodo = newInput.value.trim();
    addTodoToUI(newTodo);


    e.preventDefault();
}

function addTodoToUI(newTodo) { // Get the string and add the value to UI as new task
    const task = document.createElement('div');
    task.className= 'task';
    const content = document.createElement('div');
    content.className = 'content';
    task.appendChild(content);
    const text = document.createElement('div');
    text.className = 'text';
    content.appendChild(text);

    text.value = newTodo;

    tasks.appendChild(task);

    
}