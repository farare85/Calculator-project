'use strict';

let string = '';
const keys = document.querySelectorAll('.special');
const eq = document.querySelector('.equal');
const answerBox = document.querySelector('.answer-box');
const inputBox = document.querySelector('.input-box');
const clr = document.querySelector('.clr');
const ac = document.querySelector('.ac');
const negate = document.querySelector('.negate');
const trig = document.querySelectorAll('.trig');
const reset = function () {
  inputBox.textContent = '0';
  string = '';
};

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function () {
    string += `${keys[i].textContent} `;
    inputBox.textContent = string;
  });
}

// negate.addEventListener('click', function () {
//   const str = string;
//   if (string[string.length - 2] === '-') {
//   }

//   string = '- ' + string;
//   inputBox.textContent = string;
// });

clr.addEventListener('click', function () {
  string = string.substring(0, string.length - 2);
  inputBox.textContent = string;
});

eq.addEventListener('click', function () {
  const evaluator = string.replaceAll(' ', '');
  try {
    const answer = eval(evaluator);
    answerBox.textContent = answer;
  } catch (error) {
    answerBox.textContent = 'error';
  }
  reset();
});

ac.addEventListener('click', function () {
  answerBox.textContent = '';
  reset();
});
