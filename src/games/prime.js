import makeGameCore from '../index.js';

const getRandomFromInterval = (min, max) => Math.round(min + Math.random() * (max - min));

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let divider = 2; divider <= number / 2; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }

  return true;
};

const makePrimeGame = () => {
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const randomNumber = getRandomFromInterval(0, 50);

  const isRandomNumberPrime = isPrime(randomNumber) ? 'yes' : 'no';

  return [gameQuestion, randomNumber, isRandomNumberPrime];
};

const runGame = () => makeGameCore(makePrimeGame);

export default runGame;
