// Dark / light theme toggle with localStorage
(function () {
    const toggleBtn = document.getElementById("theme-toggle");
    const stored = window.localStorage.getItem("theme");

    if (stored === "dark") {
        document.body.classList.add("dark");
        if (toggleBtn) {
            toggleBtn.textContent = "☀️";
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const isDark = document.body.classList.toggle("dark");
            window.localStorage.setItem("theme", isDark ? "dark" : "light");
            toggleBtn.textContent = isDark ? "☀️" : "🌙";
        });
    }

    // Footer year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
})();
