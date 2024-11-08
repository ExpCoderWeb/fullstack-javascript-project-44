import makeGameCore from '../index.js';

const getRandomFromInterval = (min, max) => Math.round(min + Math.random() * (max - min));

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  return operator;
};

const makeCalc = () => {
  const gameQuestion = 'What is the result of the expression?';

  const randomOperator = getRandomOperator();

  let randomNumber1;
  let randomNumber2;

  if (randomOperator === '*') {
    randomNumber1 = getRandomFromInterval(0, 10);
    randomNumber2 = getRandomFromInterval(1, 20);
  } else {
    randomNumber1 = getRandomFromInterval(0, 100);
    randomNumber2 = getRandomFromInterval(0, 80);
  }

  const randomExpression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

  let expressionResult;
  switch (randomOperator) {
    case '+':
      expressionResult = String(randomNumber1 + randomNumber2);
      break;
    case '-':
      expressionResult = String(randomNumber1 - randomNumber2);
      break;
    case '*':
      expressionResult = String(randomNumber1 * randomNumber2);
      break;
    default:
      return null;
  }

  return [gameQuestion, randomExpression, expressionResult];
};

const runGame = () => makeGameCore(makeCalc);

export default runGame;
