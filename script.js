"use strict";
// const themeButton = document.getElementById("themeButton");
// const body = document.body;

// themeButton.addEventListener("click", () => {
//   body.classList.toggle("dark-theme");
// });
// console.log("locale", localStorage.getItem("theme"));

// const storedTheme = localStorage.getItem("theme");

// document.querySelector("select").addEventListener("change", selectChange);

// if (storedTheme === null) {
//   console.log("NULL NULL");
//   setTheme("dark");
// } else {
//   setTheme(storedTheme);
// }

// function selectChange(evt) {
//   setTheme(document.querySelector("select").value);
//   //   console.log(document.querySelector("select").value);
// }
// function setTheme(theme) {
//   localStorage.setItem("theme", theme);
//   document.querySelector("body").dataset.theme = theme;
// }
const themes = ["light", "dark", "custom"];
let currentThemeIndex = 0;

console.log("locale", localStorage.getItem("theme"));

const storedTheme = localStorage.getItem("theme");
const body = document.body;

if (storedTheme === null || !themes.includes(storedTheme)) {
  console.log("NULL NULL");
  setTheme("light"); // Default to light theme
} else {
  setTheme(storedTheme);
  currentThemeIndex = themes.indexOf(storedTheme);
}

const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", () => {
  toggleTheme();
});

function toggleTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  setTheme(themes[currentThemeIndex]);
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  body.dataset.theme = theme;
}
