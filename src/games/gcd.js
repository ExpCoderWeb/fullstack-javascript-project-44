import makeGameCore from '../index.js';

const getRandomFromInterval = (min, max) => Math.round(min + Math.random() * (max - min));

const findGreatestCommonDivider = (number1, number2) => {
  if (number1 === 0 && number2 === 0) {
    return String(1);
  }

  if (number1 === 0) {
    return String(number2);
  }

  if (number2 === 0) {
    return String(number1);
  }

  if (number1 % number2 === 0) {
    return String(number2);
  }

  if (number2 % number1 === 0) {
    return String(number1);
  }

  const stepsCount = number1 > number2 ? number2 / 2 : number1 / 2;
  let greatestCommonDivider = 1;

  for (let divider = 2; divider <= stepsCount; divider += 1) {
    if ((number1 % divider === 0) && (number2 % divider === 0)) {
      greatestCommonDivider = divider;
    }
  }

  return String(greatestCommonDivider);
};

const makeGCDGame = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';

  const randomNumber1 = getRandomFromInterval(0, 80);
  const randomNumber2 = getRandomFromInterval(0, 40);
  const randomPairNumber = `${randomNumber1} ${randomNumber2}`;

  const greatestCommonDivisor = findGreatestCommonDivider(randomNumber1, randomNumber2);

  return [gameQuestion, randomPairNumber, greatestCommonDivisor];
};

const runGame = () => makeGameCore(makeGCDGame);

export default runGame;
