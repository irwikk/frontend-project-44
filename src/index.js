import readlineSync from 'readline-sync'

const roundsCount = 3

const playGame = (rule, getQAndA) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)

  console.log(rule)
  let correctAnsCount = 0

  while (correctAnsCount < roundsCount) {
    const [que, correctAnswer] = getQAndA()
    console.log(`Question: ${que}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (correctAnswer === userAnswer) {
      console.log('Correct!')
      correctAnsCount += 1
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default playGame
