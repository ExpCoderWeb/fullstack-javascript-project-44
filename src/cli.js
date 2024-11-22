import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export default greetUser;
