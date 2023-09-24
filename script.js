"use strict";

const themes = ["landing", "light", "dark", "custom"];
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

let slideIndex = 1;
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

function checkScreenWidth() {
  if (window.innerWidth <= 768) {
    startSlideshow();
  } else {
    stopSlideshow();
  }
}

checkScreenWidth();

window.addEventListener("resize", checkScreenWidth);

let slideIndex2 = 0;
let slideshowInterval2;

function startSecondSlideshow() {
  showSecondSlides();
  slideshowInterval2 = setInterval(showSecondSlides, 4000);
}

function stopSecondSlideshow() {
  clearInterval(slideshowInterval2);
}

function showSecondSlides() {
  let slides2 = document.getElementsByClassName("slide2");

  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  slideIndex2++;

  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }

  slides2[slideIndex2 - 1].style.display = "block";
}

function checkSecondScreenWidth() {
  if (window.innerWidth <= 768) {
    startSecondSlideshow();
  } else {
    stopSecondSlideshow();
  }
}

checkSecondScreenWidth();

window.addEventListener("resize", checkSecondScreenWidth);
