import "./audio.js";
import { story } from "../assets/story.js";

/* Elements */
const textElement = document.querySelector(".prompt .prompt-text");
const typeWriterCheckboxElement = document.querySelector(
  ".options .typewriter"
);
const choicesElement = document.querySelector(".choices");

const initialState = {
  node: story.start,
  messageToShow: story.start.message,
  applyTypewriter: true
};

/* The game state */
let state = {};

/**
 *
 */
const startGame = () => {
  state = initialState;
  
    showNode(state.node);
  
};

/**
 *
 * @param {{}} choice
 */
const selectChoice = choice => {
    const node = story[choice.next];
    showNode(node)
    
};

const showNode = node => {
  if(!node) return;
  // Remove buttons
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);
  }

  // update state
  state = {
    ...state,
    node,
    messageToShow: node.message
  } 
  
  // Create choice buttons with onClicks to selectChoice
  state.node.choices.forEach(choice => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = choice.text;
    button.addEventListener("click", () => selectChoice(choice));
    // append each button to the choicesElement
    choicesElement.appendChild(button);
  });
  
  clearMessage();
  displayMessage();
}

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
    setTimeout(displayMessage, delay);
  }
};

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
  console.log(state);
};

typeWriterCheckboxElement.addEventListener("change", toggleTypewriter);


startGame();
