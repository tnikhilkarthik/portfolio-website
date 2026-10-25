
console.log("Welcome to Nikhil's Portfolio!");

// Greeting button
const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

greetButton.addEventListener("click", function () {
    greeting.textContent = "Hello! Welcome to my portfolio.";
});

// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");

// Load the saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeButton();

// Toggle the theme when clicked
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    updateThemeButton();
});

// Update the button label
function updateThemeButton() {
    const isDarkMode = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
}
