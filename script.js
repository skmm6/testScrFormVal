"use strict";

const form = document.forms.medved;

const string = document.querySelector(".full-string");
const img = document.querySelectorAll(".img-figure");
const figureKvad = document.querySelector(".kvadrat");
const figureProm = document.querySelector(".prom");
const figureKrug = document.querySelector(".krug");
const figureElips = document.querySelector(".elipse");
const figures = document.querySelectorAll(".figures");
const figureLabelHW = document.querySelectorAll(".figureHW");
const figureValueHW = document.querySelector(".valueHW");
const ugol = document.querySelector(".ugl");

let state = {};

// form.oninput = function () {
//   console.log(form.elements.contact);
//   console.log(form.elements.contact.value);

// };

console.log(figures[0]);
console.log(figures);
figures.forEach((figure, id) => {
  figure.addEventListener("click", () => {
    img.forEach((image) => {
      image.classList.remove("open");
    });
    img[id + 1].classList.add("open");
  });
});

form.oninput = function () {
  let contactValue = form.elements.contact.value;
  let figureValue = form.elements.figure.value;
  let figureHW = form.elements.figureHW.value;
  state["kuhnia"] = form.elements.contact.value;
  state["forma"] = form.elements.figure.value;
  state["razmer"] = form.elements.figureHW.value;
  state["ruchka"] = form.elements.ruchka.value;
  state["zakrugl"] = form.elements.zakrugl.value;
  figureValueHW.innerHTML = form.elements.figureHW.value;

  string.innerHTML = `Данные: ${state.kuhnia}, ${state.forma} ${state.razmer} ${state.ruchka} ${state.zakrugl} `;
  console.log(state);
};

form.onsubmit = () => {
  alert(
    `Данные: ${state.kuhnia}, ${state.forma} ${state.razmer} ${state.ruchka} ${state.zakrugl} `
  );
};
//
