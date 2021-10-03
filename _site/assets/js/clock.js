const clock = document.querySelector("span#clock");

function getClock() {
    const date = new Date();
    const hours   = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}
getClock();

clock.classList.add("animation-init");
setTimeout(function () {
    clock.classList.add("animation-fade");
}, 30);
setInterval(getClock, 1000);
// setInterval(sayHello, 1000);
// setTimeout(sayHello, 1000);