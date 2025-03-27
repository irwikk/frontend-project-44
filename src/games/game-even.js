import getRandomNumber from '../../src/getRandomNumber.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNum = (num) => num % 2 === 0;

const getQueAndAns = () => {
  const question = getRandomNumber();
  const answer = isEvenNum(question) ? 'yes' : 'no';
  return [question, answer];
};

const initGameEven = () => {
  playGame(rule, getQueAndAns);
};

export default initGameEven;