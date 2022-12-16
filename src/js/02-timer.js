import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const { Notify } = Notiflix;
const btn = document.querySelector('button[data-start]');
btn.setAttribute('disabled', 'disabled');

//
// (document.querySelector('.value[data-days]').textContent =
//   '4');
//
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
let date = '';
let countr = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    date = new Date(selectedDates[0]);
    if (date.getTime() < Date.now()) {
      Notify.warning('выбери время в будущем');
      btn.setAttribute('disabled', 'disabled');
      return;
    }
    btn.removeAttribute('disabled');
  },
};
const onClickBtn = () => {
  let int = setInterval(() => {
    const timerDate = convertMs(date.getTime() - Date.now());
    start(timerDate);

    if (date.getTime() - Date.now() < 1000) {
      clearInterval(int);
    }
  }, 1000);

  Notify.success('Таймер пошел');
  btn.setAttribute('disabled', 'disabled');
};

// start();
//
flatpickr('#datetime-picker', options);

const start = timerDate => {
  const { days, hours, minutes, seconds } = timerDate;
  document.querySelector('.value[data-days]').textContent = days;
  document.querySelector('.value[data-hours]').textContent = hours;
  document.querySelector('.value[data-minutes]').textContent = minutes;
  document.querySelector('.value[data-seconds]').textContent = seconds;
};
btn.addEventListener('click', onClickBtn);
