const creepyAmbience = [
  new Audio("../assets/sounds/creepy-vocal-ambience.wav"),
  new Audio("../assets/sounds/creepy-soundscape.wav")
];
const sound = creepyAmbience[0];


export const playAudio = () => {
  sound.loop = true;
  sound.volume = 0.5;
  sound.play();
};

export const pauseAudio = () => {
  sound.pause();
};

const toggleMusic = e => {
  if (e.target.checked) {
    playAudio();
  } else {
    pauseAudio();
  }
};

const musicCheckboxElement = document.querySelector(
  ".options input[type='checkbox']"
);
musicCheckboxElement.addEventListener("change", toggleMusic);
