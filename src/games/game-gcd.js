import getRandomNumber from '../../src/getRandomNumber.js';
import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (first, second) => {
  if (first === 0 || second === 0) {
    return first + second;
  }
  if (first > second) {
    return getGCD(first - second, second);
  }
  return getGCD(first, second - first);
};


const getQueAndAns = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  
  const question = `${num1} ${num2}`;
  const answer = String(getGCD(num1, num2));
  return [question, answer];
};

const initGameGCD = () => {
  playGame(rule, getQueAndAns);
};

export default initGameGCD;