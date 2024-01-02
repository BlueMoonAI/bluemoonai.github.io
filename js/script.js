const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// Save user preference on load

const currentTheme = localStorage.getItem("theme") || getSystemTheme();

document.documentElement.setAttribute("data-theme", currentTheme);

if (currentTheme === "dark") {
  toggleSwitch.checked = true;
}

// Adding date
let myDate = document.querySelector("#datee");
const year = new Date().getFullYear();
myDate.innerHTML = year;

// Function to get system theme
function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
}
