"use strict";

let colorPicker = new iro.ColorPicker("#usersPick", {
  // Set the size of the color picker
  width: 320,
  // Set the initial color to pure red
  color: "#f00",
});

// Variabler på farverne
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3 = document.querySelector("#color3");
const color4 = document.querySelector("#color4");
const color5 = document.querySelector("#color5");
const color6 = document.querySelector("#color6");
const color7 = document.querySelector("#color7");
const color8 = document.querySelector("#color8");

// Variabler på elementerne
let backtab;
let eyestay;
let sole;
let tongue;
let lace;
let lining;
let nike;
let vamp;
let tip;
let quarter;
let foxing;

let selectedColor;

document.addEventListener("DOMContentLoaded", start);

async function start() {
  let response = await fetch("shoe.svg");
  let mySvg = await response.text();
  document.querySelector("section").innerHTML = mySvg;

  // Variabler på elementerne
  backtab = document.querySelector("#backtab");
  eyestay = document.querySelector("#eyestay");
  sole = document.querySelector("#sole");
  tongue = document.querySelector("#tongue");
  lace = document.querySelector("#lace");
  lining = document.querySelector("#lining");
  nike = document.querySelector("#nike");
  vamp = document.querySelector("#vamp");
  tip = document.querySelector("#tip");
  quarter = document.querySelector("#quarter");
  foxing = document.querySelector("#foxing");
  console.log(colorPicker.color.rgb);

  addColorsToDiv();
  init();
}

function addColorsToDiv() {
  color1.style.backgroundColor = "#ff89a2";
  color2.style.backgroundColor = "#C9CEFF";
  color3.style.backgroundColor = "#5A83CC";
  color4.style.backgroundColor = "#525a3d";
  color5.style.backgroundColor = "#AACC5A";
  color6.style.backgroundColor = "#FFEB5C";
  color7.style.backgroundColor = "#DF74FF";
  color8.style.backgroundColor = "#35CC5B";
}

function init() {
  backtab.addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });

  eyestay.addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });
  sole.addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });
  tongue.addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });
  lace.addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });
  lining.addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });
  nike.addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });
  vamp.addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });
  tip.addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });
  quarter.addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });
  foxing.addEventListener("click", (event) => {
    setColor(event.target, selectedColor);
  });

  document.querySelectorAll(".color").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target.className.includes("IroWheel")) {
        selectedColor = `rgb(${colorPicker.color.rgb.r}, ${colorPicker.color.rgb.g}, ${colorPicker.color.rgb.b})`;
      } else {
        selectedColor = event.target.style.backgroundColor;
      }
    });
  });
}

function setColor(element, selectedColor) {
  element.style.fill = selectedColor;
  element.style.stroke = selectedColor;
}
