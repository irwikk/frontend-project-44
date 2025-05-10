import getRandomNumber from '../../src/getRandomNumber.js'
import playGame from '../index.js'

const length = 10
const max = 10

const rule = 'What number is missing in the progression?'

const getQAndA = () => {
  const firstNum = getRandomNumber()
  const diffProgression = getRandomNumber(1, max)
  const skip = getRandomNumber(0, length)
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + diffProgression * i)
  }
  const answer = progression[skip]
  progression[skip] = '..'
  const que = progression.join(' ')
  return [que, String(answer)]
}

const GameProgression = () => {
  playGame(rule, getQAndA)
}

export default GameProgression
