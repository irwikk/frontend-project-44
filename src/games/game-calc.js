import getRandomNumber from '../../src/getRandomNumber.js';
import playGame from '../index.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getCorrectAns = (first, second, operation) => {
  let answer;
  switch (operation) {
    case '+': answer = first + second;
      break;
    case '-': answer = first - second;
      break;
    case '*': answer = first * second;
      break;
    default: break;
  }
  return answer;
};

const getQueAndAns = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const operation = operations[getRandomNumber(0, operations.length)];
  const question = `${first} ${operation} ${second}`;
  const answer = getCorrectAns(first, second, operation);
  return [question, String(answer)];
};

const initGameCalc = () => {
  playGame(rule, getQueAndAns);
};

export default initGameCalc;