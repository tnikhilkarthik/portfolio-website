console.log("Welcome to Nikhil's Portfolio!");
const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

greetButton.addEventListener("click", function () {
    greeting.textContent = "Hello! Welcome to my portfolio.";
});