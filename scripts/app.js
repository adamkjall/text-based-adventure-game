import { startGame } from "./game.js";

const startElement = document.querySelector(".start");
const inputElement = document.querySelector(".start input.player-name");
const errorMessageElement = document.querySelector(".start .error-message")

const start = e => {
  e.preventDefault(); // prevent page reload
  const input = inputElement.value;

  if (!validInput(input)) {
    errorMessageElement.innerText = "Name is too long"
    return;
  }

  startElement.classList.add("hide");
  const playerName = capitalize(input);
  startGame(playerName);
  inputElement.value = ""; // clear the input
};

const validInput = input => input.length < 16;

/**
 *  Capitalize every word in a given string
 * @param {string} str
 */
const capitalize = str => {
  const words = str.split(" ");
  words.forEach((word, i) => {
    let uppercaseFirstLetter = word.charAt(0).toUpperCase();
    let stringWithoutFirstLetter = word.slice(1);
    words[i] = uppercaseFirstLetter + stringWithoutFirstLetter;
  });
  return words.join(" ");
};

// inputElement.addEventListener("input", checkInput);
startElement.addEventListener("submit", start);
