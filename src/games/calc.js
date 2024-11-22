import makeGameCore from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  return operator;
};

const makeCalcGame = () => {
  const calculateExpression = (number1, number2, operator) => {
    switch (operator) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      default:
        throw new Error(`Invalid operator - ${operator}`);
    }
  };

  const randomOperator = getRandomOperator();

  let randomNumber1 = getRandomInRange(0, 100);
  let randomNumber2 = getRandomInRange(0, 80);

  if (randomOperator === '*') {
    randomNumber1 = getRandomInRange(0, 10);
    randomNumber2 = getRandomInRange(1, 20);
  }

  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const answer = String(calculateExpression(randomNumber1, randomNumber2, randomOperator));

  return [question, answer];
};

const runCalcGame = () => makeGameCore(rules, makeCalcGame);

export default runCalcGame;
