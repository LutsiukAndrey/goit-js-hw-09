const startBtn = document.querySelector('button[data-start]');

const stopBtn = document.querySelector('button[data-stop]');
let interval = null;
stopBtn.setAttribute('disabled', 'disabled');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');

//   setInterval(onClick, 1000);
startBtn.addEventListener('click', () => {
  interval = setInterval(() => {
    body.style.backgroundColor = `${getRandomHexColor()}`;
    startBtn.setAttribute('disabled', 'disabled');
    stopBtn.removeAttribute('disabled');
  }, 1000);
});
stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'disabled');
});
