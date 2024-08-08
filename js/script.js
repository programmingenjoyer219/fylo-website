const toggleButton = document.getElementById("mode-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

toggleButton.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark");
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");
});