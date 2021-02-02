import { wordIncluded } from './englishWordIncluded';
import { start, timer } from './startAndTimer';

start();
timer();

const form = document.getElementById("search-form");

form.addEventListener('submit', wordIncluded);
