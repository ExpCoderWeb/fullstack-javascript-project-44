import makeGameCore from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  return operator;
};

const calculateExpression = (number1, number2, operator) => {
  let expressionResult;
  switch (operator) {
    case '+':
      expressionResult = (number1 + number2);
      break;
    case '-':
      expressionResult = (number1 - number2);
      break;
    case '*':
      expressionResult = (number1 * number2);
      break;
    default:
      return null;
  }

  return expressionResult;
};

const makeCalcGame = () => {
  const randomOperator = getRandomOperator();

  let randomNumber1;
  let randomNumber2;

  if (randomOperator === '*') {
    randomNumber1 = getRandomInRange(0, 10);
    randomNumber2 = getRandomInRange(1, 20);
  } else {
    randomNumber1 = getRandomInRange(0, 100);
    randomNumber2 = getRandomInRange(0, 80);
  }

  const randomExpression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const calculatedExpression = calculateExpression(randomNumber1, randomNumber2, randomOperator);

  return [randomExpression, String(calculatedExpression)];
};

const runCalcGame = () => makeGameCore(rules, makeCalcGame);

export default runCalcGame;
