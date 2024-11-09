import makeGameCore from '../index.js';

const getRandomFromInterval = (min, max) => Math.round(min + Math.random() * (max - min));

const findGreatestCommonDivisor = (number1, number2) => {
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
  let greatestCommonDivisor = 1;

  for (let divisor = 2; divisor <= stepsCount; divisor += 1) {
    if ((number1 % divisor === 0) && (number2 % divisor === 0)) {
      greatestCommonDivisor = divisor;
    }
  }

  return String(greatestCommonDivisor);
};

const makeGCD = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';

  const randomNumber1 = getRandomFromInterval(0, 80);
  const randomNumber2 = getRandomFromInterval(0, 40);
  const randomPairNumber = `${randomNumber1} ${randomNumber2}`;

  const greatestCommonDivisor = findGreatestCommonDivisor(randomNumber1, randomNumber2);

  return [gameQuestion, randomPairNumber, greatestCommonDivisor];
};

const runGame = () => makeGameCore(makeGCD);

export default runGame;
