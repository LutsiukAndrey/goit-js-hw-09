import Notiflix from 'notiflix';
const { Notify } = Notiflix;
let amount = 0;
let position = 1;
let stepdelay = 0;
let firsD = 0;
let end = 400;
let counterTrue = 0;
let counterFalse = 0;
const refs = {
  dataform: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
};

const onSucses = ({ position, delay }) => {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};
const onError = ({ position, delay }) => {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
        counterTrue++;
      } else {
        reject({ position: position, delay: delay });
        counterFalse++;
      }
    }, firsD);
  });
}

const onSubmit = event => {
  event.preventDefault();

  const { dataform, inputDelay, inputStep, inputAmount } = refs;
  firsD = Number(inputDelay.value);
  stepdelay = Number(inputStep.value);
  amount = Number(inputAmount.value);
  for (let i = 1; i <= amount; i++) {
    createPromise(position, firsD).then(onSucses).catch(onError);
    firsD += stepdelay;
    position++;
    end += stepdelay;
  }
  setTimeout(() => {
    Notify.info(
      `Закончили! всего ${counterTrue} успеха и ${counterFalse} ошибок`,
      {
        timeout: 20000,
      }
    );
  }, end);
  dataform.reset();
};
refs.dataform.addEventListener('submit', onSubmit);
