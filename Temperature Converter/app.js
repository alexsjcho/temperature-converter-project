/* 
USER STORY:

1. User can input any number in celcius and it will automatically convert it to other measurements instantly

*/

// Strict mode provides assurance against global variables
"use strict";

//Define the variables associated with the types of inputs in this app
const cInput = document.querySelector("#c > input");
const fInput = document.querySelector("#f > input");
const kInput = document.querySelector("#k > input");

//Rounding function
function roundNum(num) {
  return Math.round(num * 100) / 100;
}

//Create a reusable main logic funciton
function cToFAndK() {
  //Use method parseFloat to convert string into floating integer
  const cTemp = parseFloat(cInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;
  fInput.value = roundNum(fTemp);
  kInput.value = roundNum(kTemp);
}

//Function to convert input at F to K and C
function fToCAndK() {
  const fTemp = parseFloat(fInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = fTemp + 459.67 + 5 / 9;

  cInput.value = roundNum(cTemp);
  kInput.value = roundNum(kTemp);
}

//Function to convert input at F to K and C
function kToFAndC() {
  const kTemp = parseFloat(kInput.value);
  const fTemp = (9 / 5) * (kTemp - 273) + 32;
  const cTemp = kTemp + 273.15;

  cInput.value = roundNum(cTemp);
  fInput.value = roundNum(fTemp);
}

//Event Handlers
function eventListener() {
  cInput.addEventListener("input", cToFAndK);
  fInput.addEventListener("input", fToCAndK);
  kInput.addEventListener("input", kToFAndC);
}

eventListener();
