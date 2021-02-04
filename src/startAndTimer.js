import { Resultarray } from './randomWordArray';

const form = document.getElementById("search-form");
const startButton = document.getElementById("start-button");
const endButton = document.getElementById("end-submit");
const letters = document.querySelector('.letters');

const start = () => {
  startButton.addEventListener("click", (event) => {
    letters.innerHTML = '';
    Resultarray.forEach((letter) => {
      const randomLetter = `<li>${letter}</li>`
      letters.insertAdjacentHTML("beforeend", randomLetter);
    });
  });
}

const timer = () => {
  startButton.addEventListener("click", (event) => {
    startButton.disabled = true;
    let startTime = performance.now();
    endButton.addEventListener("click", (event) => {
      const endTime = performance.now();
      let timeDiff = endTime - startTime;
      timeDiff /= 1000;
      const seconds = timeDiff.toFixed(3);
      time.innerHTML = '';
      time.insertAdjacentHTML('afterbegin', ` <p>Wow it took you only ${seconds} seconds!</p>`);
    });
  });
}

export { start, timer };