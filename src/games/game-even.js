import getRandomNumber from '../../src/getRandomNumber.js'
import playGame from '../index.js'

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = num => num % 2 === 0

const getQAndA = () => {
  const que = getRandomNumber()
  const answer = isEven(que) ? 'yes' : 'no'
  return [que, answer]
}

const GameEven = () => {
  playGame(rule, getQAndA)
}

export default GameEven
