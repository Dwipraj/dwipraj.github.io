window.toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
};

window.loadTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
    }
};