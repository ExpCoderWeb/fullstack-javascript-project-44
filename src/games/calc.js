import makeGameCore from '../index.js';

const gameQuestion = 'What is the result of the expression?';

const getRandomFromInterval = (min, max) => Math.round(min + Math.random() * (max - min));

const getrandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  return operator;
};

const formRandomExpression = (firstNumber, secondNumber, operator) => `${firstNumber} ${operator} ${secondNumber}`;

const makeCalc = () => {
  const randomOperator = getrandomOperator();
  let randomNumber1;
  let randomNumber2;

  if (randomOperator === '*') {
    randomNumber1 = getRandomFromInterval(0, 10);
    randomNumber2 = getRandomFromInterval(1, 20);
  } else {
    randomNumber1 = getRandomFromInterval(0, 100);
    randomNumber2 = getRandomFromInterval(0, 80);
  }

  const randomExpression = formRandomExpression(randomNumber1, randomNumber2, randomOperator);
  let expressionValue;

  switch (randomOperator) {
    case '+':
      expressionValue = String(randomNumber1 + randomNumber2);
      break;
    case '-':
      expressionValue = String(randomNumber1 - randomNumber2);
      break;
    case '*':
      expressionValue = String(randomNumber1 * randomNumber2);
      break;
    default:
      return null;
  }

  return [randomExpression, expressionValue];
};

const runGame = () => makeGameCore(gameQuestion, makeCalc);

export default runGame;
