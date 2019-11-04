import { startGame } from "./game.js";

/* Elements */
const startElement = document.querySelector(".start");
const inputElement = document.querySelector(".start input.player-name");
const errorMessageElement = document.querySelector(".start .error-message")

/**
 * Start of the application
 * @param {Event} e submit event
 */
const start = e => {
  e.preventDefault(); // prevent page reload
  const name = inputElement.value;
  inputElement.value = ""; // clear the input

  if (!validName(name)) {
    errorMessageElement.innerText = "Name is too long"
    return;
  }

  startElement.classList.add("hide"); // hide the start screen
  const playerName = capitalize(name); // Capitalize the players name

  startGame(playerName);
};

/**
 * Checks if the name is valid
 * @param {String} name name of player
 */
const validName = name => name.length < 16;

/**
 *  Capitalize every word in a given string
 * @param {string} str
 */
const capitalize = str => {
  const words = str.split(" ");
  words.forEach((word, i) => {
    let uppercaseFirstLetter = word.charAt(0).toUpperCase();
    let stringWithoutFirstLetter = word.slice(1).toLowerCase();
    words[i] = uppercaseFirstLetter + stringWithoutFirstLetter;
  });
  return words.join(" ");
};

/* Event listeners */
startElement.addEventListener("submit", start);
