const images = [  
    "astronomy-g90d410c6f_1920.jpg",
    "jellyfish-gcb6374543_1920.jpg",
    "lion-gea6b70c99_1920.jpg",
    "dice-ga07b915b5_1920.jpg",
    "adventure-gcc5839f81_1920.jpg",
    "blue-g51cd0e104_1920.jpg",
    "mountains-g3ceb19a85_1920.jpg",
    "tenor-saxophone-gf0695a924_1920.jpg",
    "nature-ga9acd2864_1920.jpg", 
    "ocean-g3df089a45_1920.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgDiv = document.querySelector("#background");
const bgImage = document.createElement("div");


bgImage.style.backgroundImage = `url(img/${chosenImage})`;
// bgImage.style.backgroundImage = `url(https://cdn.statically.io/img/wallpapercave.com/wp/wp3284832.gif)`;
bgImage.classList.add("background-item");

bgDiv.appendChild(bgImage);

bgDiv.classList.add("animation-init");
setTimeout(function () {
    bgDiv.classList.add("animation-fade");
}, 30);
