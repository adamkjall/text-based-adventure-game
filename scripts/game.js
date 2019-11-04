import { story } from "../assets/story.js";
import Player from "./player.js";
import { toggleMusic } from "../scripts/audio.js";

/* Elements */
const gameElement = document.querySelector(".game");
const textElement = document.querySelector(".prompt .prompt-text");
const choicesElement = document.querySelector(".choices");
const inputElement = document.querySelector(".choices .input-choice");

/* Option checkboxes */
const typeWriterCheckboxElement = document.querySelector(
  ".options .typewriter"
);
const musicCheckboxElement = document.querySelector(".options .sound");

/* Player stats elements */
const nameElement = document.querySelector(".player-info .name");
const hpElement = document.querySelector(".player-info .hp");
const mpElement = document.querySelector(".player-info .mp");
const levelElement = document.querySelector(".player-info .level");

/**
 * The initial state of the game
 */
const initialState = {
  node: story.spela,
  messageToShow: story.spela.message,
  applyTypewriter: true,
  intervalId: "",
  input: ""
};

/* The game state */
let state = {};

/**
 * Starts the game
 * @param {String} name Name of the player
 */
export const startGame = name => {
  const player = Player(name);

  // Set the state of the game
  state = { ...initialState, player };

  // Show the game
  gameElement.classList.remove("hide");

  // Show first node
  showNode(state.node);
};

/**
 * Display a node("room") from story.js to the user
 * @param {Object} node Node("room") to be shown
 */
const showNode = node => {
  if (!node) return;

  // update state
  state = {
    ...state,
    node,
    messageToShow: node.message
  };

  showChoices();

  // Sets the html elements to show the player info
  updatePlayer();

  clearMessage();
  displayMessage();
};

/**
 * Displays the choices in the input field
 */
const showChoices = () => {
  const alternatives = state.node.choices.map(choice => {
    return " " + choice.text;
  });
  inputElement.placeholder = "[" + alternatives + " ]";
};

/**
 *  Select the next node from the story
 * @param {String} input Input string from the user
 */
const selectChoice = input => {
  const isChoice = state.node.choices.find(item => input.includes(item.next));

  if (isChoice) {
    const next = isChoice.next;
    const node = story[next];
    showNode(node);
  }
};

/**
 * Displays the current game message, either the entire message
 * or one character at the time, trying to achieve a typewriter
 * effect
 */
const displayMessage = () => {
  if (!state.applyTypewriter) {
    showMessage();
    return; // return to stop the typewriter effect
  } else if (state.messageToShow) {
    showOneCharOfMessage();
  }

  clearInterval(state.intervalId);
  const delay = Math.random() * 100 + 100;
  state.intervalId = setTimeout(displayMessage, delay);
};

/**
 * Show the remaining message of messageToShow
 */
const showMessage = () => {
  textElement.textContent += state.messageToShow;
  state.messageToShow = "";
};

/**
 * Show the first char of the messageToShow and
 * remove it from messageToShow
 */
const showOneCharOfMessage = () => {
  const messageArr = state.messageToShow.split("");
  const char = messageArr.shift();

  textElement.textContent += char;
  state.messageToShow = messageArr.join("");
};

/**
 * Clears the message in the textElement
 */
const clearMessage = () => (textElement.textContent = "");

/**
 *  Toggle the typewriter effect
 * @param {event} e Change event from checkbox
 */
const toggleTypewriter = e => {
  if (e.target.checked) {
    state = { ...state, applyTypewriter: true };
  } else {
    state = { ...state, applyTypewriter: false };
  }
};

/**
 * Update the html elements according to the player object
 */
const updatePlayer = () => {
  const player = state.player;
  nameElement.innerText = player.getName();
  levelElement.innerText = player.getLevel();
  hpElement.innerText = player.getHP() + "%";
  mpElement.innerText = player.getMP() + "%";
};

/**
 * Take the input from the player and pass it to the
 * selectChoice function
 * @param {Event} e Submit event
 */
const submitInput = e => {
  e.preventDefault();

  const input = inputElement.value.toLowerCase();
  inputElement.value = "";

  selectChoice(input);
};

// Event listeners
typeWriterCheckboxElement.addEventListener("change", toggleTypewriter);
choicesElement.addEventListener("submit", submitInput);
musicCheckboxElement.addEventListener("change", toggleMusic);
