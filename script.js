"use strict";

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

  addColorsToRect();
  init();
}

function addColorsToRect() {
  color1.style.fill = "#ff89a2";
  color2.style.fill = "#C9CEFF";
  color3.style.fill = "#5A83CC";
  color4.style.fill = "#525a3d";
  color5.style.fill = "#AACC5A";
  color6.style.fill = "#FFEB5C";
  color7.style.fill = "#DF74FF";
  color8.style.fill = "#35CC5B";
}

function setColor(element, selectedColor) {
  element.style.fill = selectedColor;
  element.style.stroke = selectedColor;
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
      selectedColor = event.target.style.fill;
      console.log(selectedColor);
    });
  });
}
