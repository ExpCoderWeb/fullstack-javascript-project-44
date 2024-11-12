import makeGameCore from '../index.js';

const getRandomFromInterval = (min, max) => Math.round(min + Math.random() * (max - min));

const getRandomWithoutZeroAndUnits = (min, max) => {
  const getRandomNumber = () => Math.round(min + Math.random() * (max - min));
  const randomNumber = getRandomNumber();
  if (randomNumber !== -1 && randomNumber !== 0 && randomNumber !== 1) {
    return randomNumber;
  }

  while (randomNumber === -1 || randomNumber === 0 || randomNumber === 1) {
    const newRandomNumber = getRandomNumber();
    if (newRandomNumber !== -1 && newRandomNumber !== 0 && newRandomNumber !== 1) {
      return newRandomNumber;
    }
  }
  // Выдаёт такую ошибку линтера при отсутствии return в конце функции:
  // "Expected to return a value at the end of arrow function eslintconsistent-return",
  // Поэтому решил воткнуть в конце return null

  return null;
};

const getRandomProgression = (size, firstElement, difference, hiddenPosition) => {
  const progression = [];
  let element = firstElement;

  for (let i = 0; i < size; i += 1) {
    progression[i] = element;
    element += difference;
  }

  const hiddenElement = String(progression[hiddenPosition - 1]);

  return [progression, hiddenElement];
};

const makeProgressionGame = () => {
  const gameQuestion = 'What number is missing in the progression?';

  const size = getRandomFromInterval(5, 10);
  const firstElement = getRandomFromInterval(0, 15);
  const difference = getRandomWithoutZeroAndUnits(-10, 10);
  const hiddenPosition = getRandomFromInterval(1, size);

  const randomProgression = getRandomProgression(size, firstElement, difference, hiddenPosition);

  const [progression, hiddenElement] = randomProgression;
  const progressionWithHidden = [...progression];
  progressionWithHidden[hiddenPosition - 1] = '..';
  const joinedProgressionWithHidden = progressionWithHidden.join(' ');

  return [gameQuestion, joinedProgressionWithHidden, hiddenElement];
};

const runGame = () => makeGameCore(makeProgressionGame);

export default runGame;