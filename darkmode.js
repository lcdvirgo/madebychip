const toggleBtn = document.getElementById("toggle-btn");
const theme = document.body;
let darkMode = localStorage.getItem("dark-mode");

var image = document.getElementById('changesvg');
const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
  document.getElementById("changesvg").src="assets/sun.svg";
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
    document.getElementById("changesvg").src="assets/sun.svg";
  } else {
    disableDarkMode();
    document.getElementById("changesvg").src="assets/moon.svg";
  }
});