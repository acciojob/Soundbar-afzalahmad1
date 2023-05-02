//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
const soundsFolder = './sounds/';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const soundFile = soundsFolder + button.dataset.sound;
    playSound(soundFile);
  });
});

stopButton.addEventListener('click', () => {
  stopSound();
});

let audio = null;

function playSound(soundFile) {
  if (audio) {
    stopSound();
  }
  audio = new Audio(soundFile);
  audio.play();
}

function stopSound() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
    audio = null;
  }
}
