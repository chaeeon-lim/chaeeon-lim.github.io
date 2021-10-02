const images = [  
    "colorful-g2f8f7235d_1920.jpg", "nature-ga9acd2864_1920.jpg", "ocean-g3df089a45_1920.jpg"];

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
