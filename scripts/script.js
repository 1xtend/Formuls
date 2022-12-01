const form = document.querySelector('#form');
const inputM = form.querySelector('#mInput');
const inputN = form.querySelector('#nInput');
const countBtn = form.querySelector('#count-btn');
const result = form.querySelector('.box__result');

function arrayFromNumber(e) {
  e.preventDefault();

  const numbersArray = [];

  for (let i = 0; i < inputN.value; i++) {
    const num = inputN.value - i;
    numbersArray.push(num);
  }

  return numbersArray;
}

function countArrayNumbers(e) {
  const numbersArray = arrayFromNumber(e);

  let result = 0;
  let add = 0;
  let between = 1;

  for (let i = 1; i < numbersArray.length; i++) {
    const num = numbersArray[i];

    add = num + 1;
    result = between * add;
    between = result;
  }

  console.log();
}

form.addEventListener('submit', countArrayNumbers);
