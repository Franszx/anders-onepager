"use strict";

const themes = ["landing", "dark"];
let currentThemeIndex = 0;

console.log("locale", localStorage.getItem("theme"));

const storedTheme = localStorage.getItem("theme");
const body = document.body;

if (storedTheme === null || !themes.includes(storedTheme)) {
  console.log("NULL NULL");
  setTheme("landing");
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

let slideIndex = 0;
let slideshowInterval;

function startSlideshow() {
  showSlides();
  slideshowInterval = setInterval(showSlides, 4000);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
}

startSlideshow();

// Your existing JavaScript code

// Add this code to handle the background color change
// const navbarLinks = document.querySelectorAll(".social-links-footer a");

// const linkColors = ["#0966c1", "#1f2328", "transparent"];

// const defaultBgColors = ["#f2f2f2", "#2f2f2e", "transparent"];

// navbarLinks.forEach((link, index) => {
//   link.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = linkColors[index];
//   });

//   link.addEventListener("mouseout", () => {
//     document.body.style.backgroundColor = defaultBgColors[currentThemeIndex];
//   });
// });
const button = document.getElementById("themeButton");
let isClicked = false;

button.addEventListener("click", () => {
  if (isClicked) {
    // Revert to the original text
    button.innerText = "I made a dark theme";
  } else {
    // Change the text when clicked
    button.innerText = "Back!";
  }

  // Toggle the clicked state
  isClicked = !isClicked;
});
