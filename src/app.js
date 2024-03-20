/* eslint-disable */
import "./style.css";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomPalos());
  document.querySelector(".card").innerHTML += generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
    "☠️",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  let randomNumber = numbers[indexNumbers];
  if (randomNumber === "☠️") {
    alert("No has durado mucho 😏");
  }
  return randomNumber;
};

let generateRandomPalos = () => {
  let palos = ["♦", "♠", "♥", "♣"];
  let indexPalos = Math.floor(Math.random() * palos.length);
  return palos[indexPalos];
};

let firstClick = true; //Para el 1º click: alerta

document.getElementById("boton").addEventListener("click", () => {
  if (firstClick) {
    alert("¡Si sale ☠️ estás muerto!");
    firstClick = false;
  } else {
    const cardElement = document.querySelector(".card");
    cardElement.classList.remove("♦", "♠", "♥", "♣");
    const randomNumber = generateRandomNumber();
    const randomPalo = generateRandomPalos();
    cardElement.textContent = randomNumber;
    cardElement.setAttribute("data-card-number", randomNumber);
    cardElement.classList.add(randomPalo);
  }
});
