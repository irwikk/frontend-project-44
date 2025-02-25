const maxNumRan = 100;
const minNumRan = 0;

const getRandomNumber = (minNum = minNumRan,
  maxNum = maxNumRan) => Math.floor(Math.random() * maxNum) + minNum;

export default getRandomNumber;