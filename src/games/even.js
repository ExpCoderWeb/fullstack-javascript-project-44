import makeGameCore from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeEvenGame = () => {
  const isEven = (number) => number % 2 === 0;

  const question = getRandomInRange(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const runEvenGame = () => makeGameCore(rules, makeEvenGame);

export default runEvenGame;
