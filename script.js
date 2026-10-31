
const themeToggle = document.getElementById("theme-toggle");

// Load the visitor's saved theme, or use dark mode by default
const savedTheme = localStorage.getItem("portfolio-theme") || "dark";

document.documentElement.setAttribute("data-theme", savedTheme);

updateThemeButton();

function updateThemeButton() {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
}

// Switch between light and dark modes
themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("portfolio-theme", newTheme);

    updateThemeButton();
});
