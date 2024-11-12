import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

const makeGameCore = (gameFunction) => {
  const greeting = greetUser();
  const [gameQuestion] = gameFunction();
  console.log(`${gameQuestion}`);

  let correctCount = 0;
  while (correctCount < 3) {
    const [, expression, correctAnswer] = gameFunction();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      correctCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${greeting}!`);
      break;
    }
  }

  if (correctCount === 3) {
    console.log(`Congratulations, ${greeting}!`);
  }
};

export default makeGameCore;
