import "./audio.js";
import { story } from "../assets/story.js";

/* Elements */
const textElement = document.querySelector(".prompt .prompt-text");
const choiceButtonsElement = document.querySelectorAll(".choices .btn");
const typeWriterCheckboxElement = document.querySelector(
  ".options .typewriter"
);
const choicesElement = document.querySelector(".choices");

/* The game state */
const initialState = {
  node: story.start,
  messageToShow: story.start.message,
  applyTypewriter: true
};

let state = {};

/**
 *
 */
const startGame = () => {
  state = initialState;
  
 
    while (choicesElement.firstChild) {
      choicesElement.removeChild(choicesElement.firstChild);
    }
    displayMessage();

    state.node.choices.forEach(node => {
      const button = document.createElement("button");
      button.classList.add("btn");
      button.innerHTML = node.text;
      button.addEventListener("click", () => {
        state.node = story[node.next];
        state.messageToShow = story[node.next].message;
        clearMessage();
        displayMessage();
        
      });
      choicesElement.appendChild(button);
    });
  
};

/**
 *
 * @param {*} choice
 */
const selectChoice = e => {
  console.log(e);
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
choiceButtonsElement.forEach(button =>
  button.addEventListener("click", selectChoice)
);

startGame();
