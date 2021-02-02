import { Resultarray } from './randomWordArray';

const form = document.getElementById("search-form");
const startButton = document.getElementById("start-button");
const endButton = document.getElementById("end-submit");
const letters = document.querySelector('.letters');

const start = () => {
  startButton.addEventListener("click", (event) => {
    Resultarray.forEach((letter) => {
      const randomLetter = `<li>${letter}</li>`
      letters.insertAdjacentHTML("beforeend", randomLetter);
    });
  });
}


startButton.addEventListener("click", (event) => {
  let startTime = performance.now();
  endButton.addEventListener("click", (event) => {
    const endTime = performance.now();
    let timeDiff = endTime - startTime;
    timeDiff /= 1000;
    const seconds = timeDiff.toFixed(3);
    time.insertAdjacentHTML('afterbegin', ` <p>Wow it took you only ${seconds} seconds!</p>`);
  });
});


const searchWord = (word, isIncluded) => {
  fetch(`https://wagon-dictionary.herokuapp.com/${word}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data['found']);
    console.log(word);
    console.log(isIncluded);
    if (isIncluded === true) {
      if (data['found'] === true) {
        result.insertAdjacentHTML('afterbegin', ` <p>You are <strong>genuis!!! ${word}</strong> is a valid English word</p>
        <a onClick="window.location.reload()" class="refresh">Play again?</a>`);
      } else {
        result.insertAdjacentHTML('afterbegin', ` <p>Sorry but <strong>${word}</strong> does not seem to be a valid English word...dumbass</p>
        <a onClick="window.location.reload()" class="refresh">Play again?</a>`);
      }
    } else {
      result.insertAdjacentHTML('afterbegin', ` <p>Dunmbass! You can't build <strong>${word}</strong> with the letters <strong>${Resultarray.join('-')}</strong></p>
      <a onClick="window.location.reload()" class="refresh">Play again?</a>`);
    }
  });
};
const allFound = (wo, ar) => {
    return wo.every( letter => ar.includes(letter) );
  };

form.addEventListener('submit', (event) => {
  event.preventDefault(); // <-- to prevent <form>'s native behaviour
  const input = event.currentTarget.querySelector('.form-control');
  const inputWord = input.value;
  const wordUp = inputWord.toUpperCase();
  const wordArray = wordUp.split('');
  const included = allFound(wordArray, Resultarray);
  searchWord(inputWord, included);
});

start();

