//Selectors
const todoInput = document.querySelector('.ToDoInput');
const todoButton = document.querySelector('.btnToDo');
const todoList = document.querySelector('.ToDoList');

//Event Listners
todoButton.addEventListener('click', addToDo);

//Functions
function addToDo(event){
    //prevent form from submitting
    event.preventDefault();
    //ToDo DIV
    const todoDiv = document.createElement("div");
}
