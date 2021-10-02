const images = [ "books-g45f4107de_1920.jpg", "colorful-g2f8f7235d_1920.jpg", "nature-ga9acd2864_1920.jpg", "ocean-g3df089a45_1920.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgDiv = document.querySelector("#background");
const bgImage = document.createElement("div");

bgImage.style.backgroundImage = `url(img/${chosenImage})`;
bgImage.classList.add("background-item");

bgDiv.appendChild(bgImage);

// const body = document.body;

// body.style.backgroundImage = `url(img/${chosenImage})`;
