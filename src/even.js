import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 101);

const isEven = (number) => number % 2 === 0;

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctCount = 0;
  while (correctCount < 3) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
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

export default runGame;
