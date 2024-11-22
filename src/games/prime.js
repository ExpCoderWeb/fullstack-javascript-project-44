import makeGameCore from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = getRandomInRange(0, 50);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const runPrimeGame = () => makeGameCore(rules, makePrimeGame);

export default runPrimeGame;
