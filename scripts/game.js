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

/* Player stats elements */
const nameElement = document.querySelector(".player-info .name");
const hpElement = document.querySelector(".player-info .hp");
const mpElement = document.querySelector(".player-info .mp");
const levelElement = document.querySelector(".player-info .level");

const initialState = {
  node: story.start,
  messageToShow: story.start.message,
  applyTypewriter: true,
  intervalId: ""
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
  // Remove buttons
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);
  }

  // update state
  state = {
    ...state,
    node,
    messageToShow: node.message
  };

  updatePlayer();

  // Create choice buttons with onClicks to selectChoice
  state.node.choices.forEach(choice => {
    const button = document.createElement("button");
    button.classList.add("start-button");
    button.innerHTML = choice.text;
    button.addEventListener("click", () => {
      if(!state.messageToShow) {
        selectChoice(choice);
      // playChoiceSound(); // click sound effect
      }
    });
    // append each button to the choicesElement
    choicesElement.appendChild(button);
  });

  clearInterval(state.intervalId);
  clearMessage();
  displayMessage();
};

/**
 *  Select next node from story and call showNode
 * @param {Object} choice
 */
const selectChoice = choice => {
  const node = story[choice.next];
  showNode(node);
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
}

typeWriterCheckboxElement.addEventListener("change", toggleTypewriter);
