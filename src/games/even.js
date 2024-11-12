import makeGameCore from '../index.js';

const getRandomFromInterval = (min, max) => Math.round(min + Math.random() * (max - min));

const isEven = (number) => number % 2 === 0;

const makeEvenGame = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

  const randomNumber = getRandomFromInterval(0, 100);
  const isRandomNumberEven = isEven(randomNumber) ? 'yes' : 'no';

  return [gameQuestion, randomNumber, isRandomNumberEven];
};

const runGame = () => makeGameCore(makeEvenGame);

export default runGame;
