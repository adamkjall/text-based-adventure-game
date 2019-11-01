const creepyAmbience = [
  new Audio("./assets/sounds/creepy-vocal-ambience.wav"),
  new Audio("./assets/sounds/creepy-soundscape.wav")
];
const music = creepyAmbience[0];
const menuSound = new Audio("./assets/sounds/menu.wav");

/**
 * 
 */
export const playMusic = () => {
  music.loop = true;
  music.volume = 0.2;
  music.type = "audio/wav";
  music.play().catch(error => console.log(error));
};

/**
 *
 */
export const pauseMusic = () => {
  music.pause();
};

/**
 *
 * @param {event} e
 */
const toggleMusic = e => {
  if (e.target.checked) {
    playMusic();
  } else {
    pauseMusic();
  }
};

/**
 *
 * @param {event} e
 */
export const playChoiceSound = e => {
  menuSound.currentTime = 0;
  menuSound.volume = 0.1;
  menuSound.type = "audio/wav";
  menuSound.play().catch(error => console.log(error));
};

// Add eventlistener to the sound on off checkbox
const musicCheckboxElement = document.querySelector(".options .sound");
musicCheckboxElement.addEventListener("change", toggleMusic);

// Add eventlisteners to the choice buttons
const choiceButtons = document.querySelectorAll(".choices .btn");
choiceButtons.forEach(button =>
  button.addEventListener("click", playChoiceSound)
);
