const creepyAmbience = [
  new Audio("../assets/sounds/creepy-vocal-ambience.wav"),
  new Audio("../assets/sounds/creepy-soundscape.wav")
];
const sound = creepyAmbience[0];
const menuSound = new Audio("../assets/sounds/menu.wav");

/**
 * 
 */
export const playMusic = () => {
  sound.loop = true;
  sound.volume = 0.5;
  sound.type = "audio/wav";
  sound.play();
};

/**
 * 
 */
export const pauseMusic = () => {
  sound.pause();
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
  sound.type = "audio/wav";
  menuSound.play();
};

// Add eventlistener to the sound on off checkbox
const musicCheckboxElement = document.querySelector(
  ".options .sound"
);
musicCheckboxElement.addEventListener("change", toggleMusic);

// Add eventlisteners to the choice buttons
const choiceButtons = document.querySelectorAll(".choices .btn");
choiceButtons.forEach(button =>
  button.addEventListener("click", playChoiceSound)
);
