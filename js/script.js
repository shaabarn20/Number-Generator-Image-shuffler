

// Q1: Random Number Generator
function generateRandomNumber() {
    var min = 1;
    var max = 10;
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("randomNumber").innerHTML = "Random Number: " + randomNumber;
}

// Q2: Shuffling Images
var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg"];

function shuffleImage() {
    var randomIndex = Math.floor(Math.random() * images.length);
    var imgElement = document.querySelector("img");
    imgElement.src = images[randomIndex];
}

