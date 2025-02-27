import readlineSync from 'readline-sync';
import getRandomNumber from './randomNum.js';
import {greet} from '../src/cli.js';
greet();

function isEven(number) {
  return number % 2 === 0;
}
  
function brainEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

brainEven();