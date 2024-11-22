import makeGameCore from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What number is missing in the progression?';

const getRandomWithoutZeroAndUnits = (min = -10, max = 10) => {
  const getRandomNumber = () => Math.floor(min + Math.random() * (max - min + 1));

  const isValid = (num) => num !== -1 && num !== 0 && num !== 1;

  let randomNumber;

  do {
    randomNumber = getRandomNumber();
  } while (!isValid(randomNumber));

  return randomNumber;
};

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const makeProgressionGame = () => {
  const start = getRandomInRange(0, 15);
  const step = getRandomWithoutZeroAndUnits(-10, 10);
  const length = getRandomInRange(5, 10);

  const progression = generateProgression(start, step, length);

  const randomIndex = getRandomInRange(0, progression.length - 1);

  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const runProgressionGame = () => makeGameCore(rules, makeProgressionGame);

export default runProgressionGame;
