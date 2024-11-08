import makeGameCore from '../index.js';

const getRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

const makeEven = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

  const randomNumber = getRandomNumber();
  const isRandomNumberEven = isEven(randomNumber) ? 'yes' : 'no';

  return [gameQuestion, randomNumber, isRandomNumberEven];
};

const runGame = () => makeGameCore(makeEven);

export default runGame;
