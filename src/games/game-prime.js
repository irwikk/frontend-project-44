import getRandomNumber from '../../src/getRandomNumber.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQueAndAns = () => {
  const question = getRandomNumber();
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const initGamePrime = () => {
  playGame(rule, getQueAndAns);
};

export default initGamePrime;