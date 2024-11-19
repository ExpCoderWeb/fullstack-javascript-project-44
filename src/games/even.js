import makeGameCore from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const makeEvenGame = () => {
  const randomNumber = getRandomInRange(0, 100);
  const isRandomNumberEven = isEven(randomNumber) ? 'yes' : 'no';

  return [randomNumber, isRandomNumberEven];
};

const runEvenGame = () => makeGameCore(rules, makeEvenGame);

export default runEvenGame;
