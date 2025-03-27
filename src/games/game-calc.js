import getRandomNumber from '../../src/getRandomNumber.js';
import playGame from '../index.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calc = (num1, num2, operation) => {
  let answer;
  switch (operation) {
    case '+': answer = num1 + num2;
      break;
    case '-': answer = num1 - num2;
      break;
    case '*': answer = num1 * num2;
      break;
    default: break;
  }
  return answer;
};

const getQueAndAns = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);

  const operation = operations[getRandomNumber(0, operations.length)];
  const question = `${num1} ${operation} ${num2}`;
  const answer = String(calc(num1, num2, operation));

  return [question, answer];
};

const initGameCalc = () => {
  playGame(rule, getQueAndAns);
};

export default initGameCalc;