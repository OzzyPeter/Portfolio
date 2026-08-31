// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

// Check if user has a saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    body.classList.add("light");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}

// Toggle Theme

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light");

    if (body.classList.contains("light")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});