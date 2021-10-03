const API_KEY="5b172c160035ff221e2e71e5663ab536";

let currentPosition;

function getWeather(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You are live in", lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const icon = document.querySelector("#weather .weather-icon");
        const temp = document.querySelector("#weather .weather-temp");
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${data.main.temp}℃`;
        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    });
}

function onGeoOk(position) {
    currentPosition = position;
    getWeather(currentPosition);
}

function onGeoError() {
    // alert("Can't find you. No weather for you.");
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = "No weather info.";
        weather.innerText = "Please allow to access your location.";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
setInterval(getWeather, 1000*3, currentPosition);

const weather = document.querySelector("div #weather");

weather.classList.add("animation-init");
setTimeout(function () {
    weather.classList.add("animation-fade");
}, 30);