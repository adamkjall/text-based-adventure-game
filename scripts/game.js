import { playChoiceSound } from "./audio.js";
import { story } from "../assets/story.js";
import Player from "./player.js";

/* Elements */
const gameElement = document.querySelector(".game");
const textElement = document.querySelector(".prompt .prompt-text");
const typeWriterCheckboxElement = document.querySelector(
  ".options .typewriter"
);
const choicesElement = document.querySelector(".choices");
const inputElement = document.querySelector(".choices .input-choice");
/* Player stats elements */
const nameElement = document.querySelector(".player-info .name");
const hpElement = document.querySelector(".player-info .hp");
const mpElement = document.querySelector(".player-info .mp");
const levelElement = document.querySelector(".player-info .level");

const initialState = {
  node: story.spela,
  messageToShow: story.spela.message,
  applyTypewriter: true,
  intervalId: "",
  input: ""
};

/* The game state */
let state = {};

export const startGame = name => {
  const player = Player(name);

  // Set the state of the game
  state = { ...initialState, player };

  // Show the game
  gameElement.classList.remove("hide");

  // Sets the html elements to show the player info
  updatePlayer();
  // Show first node
  showNode(state.node);
};

const showNode = node => {
  if (!node) return;

  // update state
  state = {
    ...state,
    node,
    messageToShow: node.message
  };

  const alternatives = state.node.choices.map(choice => {
    return " " + choice.text;
  });
  inputElement.placeholder = "[" + alternatives + " ]";

  updatePlayer();

  clearMessage();
  displayMessage();
};

/**
 *  Select next node from story and call showNode
 * @param {Object} choice
 */
const selectChoice = choice => {
  const isChoice = state.node.choices.find(item => choice.includes(item.next));

  if (isChoice) {
    const next = isChoice.next;
    const node = story[next];
    showNode(node);
  }
};

/**
 * Displays the current game message with a
 * typewriter effect
 */
const displayMessage = () => {
  if (!state.applyTypewriter) {
    textElement.textContent += state.messageToShow;
    state.messageToShow = "";
    return;
  }
  if (state.messageToShow) {
    const messageArr = state.messageToShow.split("");
    const char = messageArr.shift();

    textElement.textContent += char;

    state.messageToShow = messageArr.join("");

    const delay = Math.random() * 100 + 100;
    clearInterval(state.intervalId);
    state.intervalId = setTimeout(displayMessage, delay);
  }
};

/**
 * Clears the display (textElement)
 */
const clearMessage = () => (textElement.textContent = "");

/**
 *
 * @param {event} e
 */
const toggleTypewriter = e => {
  if (e.target.checked) {
    state = { ...state, applyTypewriter: true };
  } else {
    state = { ...state, applyTypewriter: false };
  }
};

const updatePlayer = () => {
  const player = state.player;
  nameElement.innerText = player.getName();
  levelElement.innerText = player.getLevel();
  hpElement.innerText = player.getHP() + "%";
  mpElement.innerText = player.getMP() + "%";
};

const submitInput = e => {
  e.preventDefault();
  const input = inputElement.value.toLowerCase();
  inputElement.value = "";

  selectChoice(input);
};

typeWriterCheckboxElement.addEventListener("change", toggleTypewriter);
choicesElement.addEventListener("submit", submitInput);
