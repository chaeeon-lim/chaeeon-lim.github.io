const toDoForm  = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList  = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = []
console.log(toDos);

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((element) => {
        return (element.id !== parseInt(li.id))
    })
    li.remove();
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo['id'];
    const span = document.createElement("span");
    span.innerText = newTodo['text'];
    span.classList.add("item-title")
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    const chkbox = document.createElement("input");
    chkbox.type= "checkbox";
    li.appendChild(chkbox);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    li.classList.add("animation-init");
    setTimeout(function () {
        li.classList.add("animation-fade");
    }, 30);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id:Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {

}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
    toDos = parsedToDos;
    // toDos.join(parsedToDos)
}


toDoForm.classList.add("animation-init");
setTimeout(function () {
    toDoForm.classList.add("animation-fade");
}, 30);