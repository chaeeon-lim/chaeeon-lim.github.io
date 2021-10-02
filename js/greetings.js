const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();
    console.log(event)
    // alert("clicked!");
}

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

link.onclick = handleLinkClick

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event)
    const username = loginInput.value;
    console.log(username);
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username)
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}!`
    greeting.classList.remove("hidden")
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername)
}