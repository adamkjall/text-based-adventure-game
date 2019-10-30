import { startGame } from "./game.js";

const startElement = document.querySelector(".start");
const inputElement = document.querySelector("input.player-name");

/**
 * Checks the given name input and if it's a valid name
 * then start the game
 * @param {event} e
 */
const checkInput = e => {
  e.preventDefault(); // prevent page reload
  const input = inputElement.value; // save the input
  inputElement.value = ""; // clear the input

  const validInput = input;
  if (validInput) {
    startElement.classList.add("hide")
    startGame(input);
  }
};

startElement.addEventListener("submit", checkInput);
