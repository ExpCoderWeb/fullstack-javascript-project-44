import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const ROUNDS_COUNT = 3;

const makeGameCore = (rules, generateRound) => {
  const username = greetUser();
  console.log(`${rules}`);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${username}!`);
};

export default makeGameCore;
