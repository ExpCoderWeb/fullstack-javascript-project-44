import makeGameCore from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivider = (number1, number2) => {
  let a = number1;
  let b = number2;

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};

const makeGCDGame = () => {
  const randomNumber1 = getRandomInRange(0, 80);
  const randomNumber2 = getRandomInRange(0, 40);

  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(findGreatestCommonDivider(randomNumber1, randomNumber2));

  return [question, answer];
};

const runGCDGame = () => makeGameCore(rules, makeGCDGame);

export default runGCDGame;
