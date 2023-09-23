"use strict";

const themes = ["light", "dark", "custom"];
let currentThemeIndex = 0;

let slideIndex = 1;
let slideshowInterval;

console.log("locale", localStorage.getItem("theme"));

const storedTheme = localStorage.getItem("theme");
const body = document.body;

if (storedTheme === null || !themes.includes(storedTheme)) {
  console.log("NULL NULL");
  setTheme("light");
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

function checkScreenWidth() {
  if (window.innerWidth <= 768) {
    startSlideshow();
  } else {
    stopSlideshow();
  }
}

checkScreenWidth();

window.addEventListener("resize", checkScreenWidth);
