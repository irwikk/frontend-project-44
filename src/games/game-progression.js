import getRandomNumber from '../../src/getRandomNumber.js';
import playGame from '../index.js';

const progressionLength = 10;

const rule = 'What number is missing in the progression?';

const getArithmeticProgression = () => {
  let progressionNumber = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 5);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += step;
  }
  return progression;
};

const getQAndA = () => {
  const progression = getArithmeticProgression();
  const randomIndex = getRandomNumber(0, progressionLength);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const que = progression;

  return [que, correctAnswer];
};

const GameProgression = () => {
  playGame(rule, getQAndA);
};

export default GameProgression;