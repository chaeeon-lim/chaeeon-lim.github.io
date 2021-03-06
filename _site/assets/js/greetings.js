const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event)
    const username = loginInput.value;
    console.log(username);
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username)
}

function getHelloMsg(hour){
    if (hour >= 6 && hour < 12){
        return "Good Morning"
    } else if (hour >= 12 && hour < 18){
        return "Good afternoon"
    } else if (hour >= 18 && hour <= 23){
        return "Good evening"
    } else {
        return "Good night"
    }

}

function paintGreeting(username){
    const curTime = new Date()
    const quote = document.createElement("span");
    quote.innerText = username;
    greeting.innerText = `${getHelloMsg(curTime.getHours())} `;
    greeting.appendChild(quote);
    greeting.classList.add("animation-init");
    setTimeout(function () {
        greeting.classList.add("animation-fade");
    }, 30);
    greeting.classList.remove("hidden")
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername)
}


loginForm.classList.add("animation-init");
setTimeout(function () {
    loginForm.classList.add("animation-fade");
}, 30);