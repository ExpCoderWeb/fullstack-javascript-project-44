import readlineSync from 'readline-sync';

const makeGameCore = (gameQuestion, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(`${gameQuestion}`);

  let correctCount = 0;
  while (correctCount < 3) {
    const [expression, expressionValue] = gameFunction();
    console.log(`Question: ${expression}`);
    const expectedAnswer = expressionValue;
    const userAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
      correctCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${username}`);
      break;
    }
  }

  if (correctCount === 3) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default makeGameCore;
