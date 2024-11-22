import makeGameCore from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivider = (number1, number2) => {
  if (number1 === 0 && number2 === 0) {
    return 1;
  }

  if (number1 === number2) {
    return number1;
  }

  if (number1 === 0) {
    return number2;
  }

  if (number2 === 0) {
    return number1;
  }

  let a = number1;
  let b = number2;

  if (number1 < number2) {
    a = number2;
    b = number1;
  }

  let remainder;
  let GCD;

  do {
    remainder = a % b;
    if (remainder === 0) {
      GCD = b;
    }
    a = b;
    b = remainder;
  } while (remainder !== 0);

  return GCD;
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
