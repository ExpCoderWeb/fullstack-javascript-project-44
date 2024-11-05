import readlineSync from 'readline-sync';

const greetUser = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
};
export default greetUser;
