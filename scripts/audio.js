const creepyAmbience = [
  new Audio("./assets/sounds/creepy-vocal-ambience.wav"),
  new Audio("./assets/sounds/creepy-soundscape.wav")
];
const music = creepyAmbience[0];

/**
 * Play the audio in the music variable
 */
export const playMusic = () => {
  music.loop = true;
  music.volume = 0.2;
  music.type = "audio/wav";
  music.play().catch(error => console.log(error));
};

/**
 * Pause the audio in the music variable
 */
export const pauseMusic = () => {
  music.pause();
};

/**
 *  Toggle music on and off
 * @param {Event} e change event from checkbox
 */
const toggleMusic = e => {
  if (e.target.checked) {
    playMusic();
  } else {
    pauseMusic();
  }
};

// Add eventlistener to the music toggle checkbox
const musicCheckboxElement = document.querySelector(".options .sound");
musicCheckboxElement.addEventListener("change", toggleMusic);
