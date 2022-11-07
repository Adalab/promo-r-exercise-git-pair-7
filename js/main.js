"use strict";

const head = document.querySelector(".js-head");
const face = document.querySelector(".js-face");

head.addEventListener("mouseover", () => {
  face.textContent = ";)";
});
head.addEventListener("mouseout", () => {
  face.textContent = ":)";
});
