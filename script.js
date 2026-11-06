const themeButton = document.getElementById("themeToggle");

// Load the saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = " Light Mode";
}

// Handle button clicks
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");
        themeButton.textContent = " Light Mode";

    } else {

        localStorage.setItem("theme", "light");
        themeButton.textContent = " Dark Mode";

    }

});

// Mobile navigation
const menuButton = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuButton.addEventListener("click", function () {

    mainNav.classList.toggle("active");

    if (mainNav.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }

});