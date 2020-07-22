var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];


function renderTodoList(){

    todoList.innerHTML=""

    for(var i = 0; i < todos.length; i++)
    {

        var todoItem=document.createElement("li");
        todoItem.innerText=todos[i];

        var completebutton=document.createElement("button");
        completebutton.innerText="Complete";
        todoItem.appendChild(completebutton);

        todoList.appendChild(todoItem);
    }

}

renderTodoList();

todos.push("buy milk");

renderTodoList();

todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    if(todoInput.value){
        todos.push(todoInput.value);
        renderTodoList();

        todoInput.value="";
    }
});