import getRandomNumber from '../../bin/getRandomNumber.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const getQueAndAns = () => {
  const question = getRandomNumber();
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};

const initGameEven = () => {
  playGame(rule, getQueAndAns);
};

export default initGameEven;