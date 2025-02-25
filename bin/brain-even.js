import randomNum from '../bin/randomNum.js';
import {greet} from '../src/cli.js';
greet();


console.log('Answer "yes" if the number is even, otherwise answer "no".')

const evenNumber = (num) => num % 2 === 0; 

const getQandA = () => {
    const question = randomNum();
    const answer = evenNumber(question) ? 'yes' : 'no';
    return [question, answer];
    };
  
  const initGameEven = () => {
    greet(rule, getQandA);
    };

initGameEven();
  