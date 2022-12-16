// function createPromise(position, delay) {
//   return new Promise((fulfill, Reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         fulfill(delay);
//       } else {
//         Reject(delay);
//       }
//     });
//   });
// }
// const delay = document.querySelector('input[name="delay"]');
// const step = document.querySelector('input[name="step"]');
// const amount = document.querySelector('input[name="amount"]');
// const btn = document.querySelector('button');
// let firstValue = 0;
// let stepValue = 0;
// let amountValue = 0;
// const onDelay = event => {
//   const { target } = event;
//   firstValue = target.value * 1000;
// };
// const onstep = event => {
//   const { target } = event;
//   stepValue = target.value * 1000;
// };
// const onamount = event => {
//   const { target } = event;
//   amountValue = target.value;
// };
// const onClick = event => {
//   event.preventDefault();
//   setInterval(() => {
//     createPromise(2, stepValue)
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//   }, stepValue);
// };
// delay.addEventListener('change', onDelay);
// step.addEventListener('change', onstep);
// amount.addEventListener('change', onamount);
// btn.addEventListener('click', onClick);
// console.log('s');
