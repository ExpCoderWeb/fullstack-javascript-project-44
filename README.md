### Hexlet tests and linter status:
[![Actions Status](https://github.com/ExpCoderWeb/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ExpCoderWeb/fullstack-javascript-project-44/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/1435ab71ff829b6e2f62/maintainability)](https://codeclimate.com/github/ExpCoderWeb/fullstack-javascript-project-44/maintainability)

### Description
**"Brain Games"** is a set of five console games inspired by popular mobile brain-pumping apps. Each game asks questions to be answered correctly. Once three correct answers are given, the game ends. Incorrect answers end the game and prompt you to play it again. The games are:

- **Calculator**. Calculate random arithmetic expressions consisting of two numbers.
- **Progression**. Determine a missing member of an arithmetic progression.
- **Determining an even number**. Determine if a generated number is even.
- **Determining a prime number**. Determine if the number is prime.
- **Determining the greatest common divisor**. Find the greatest common divisor of two numbers.

### Minimal system requirements:
- Unix terminal
- Node.js: version from 18.x

### Setup
1. Clone the repo with the following command:
```bash
git clone git@github.com:ExpCoderWeb/fullstack-javascript-project-44.git
```
2. Enter the root directory of the package with the command:
```bash
cd fullstack-javascript-project-44
```
3. Install the necessary dependencies  with the command:
```bash
npm ci
```
4. Create a symbolic link to the package in order to make the game commands available to run from any directory of the system using the command: 
```bash
npm link
```

### Games launch
Enter a command into the terminal to launch the corresponding game.

- **Calculator** - `brain-calc`
- **Progression** - `brain-progression`
- **Determining an even number** - `brain-even`
- **Determining a prime number** - `brain-prime`
- **Determining the greatest common divisor** - `brain-gcd`

Also, with `brain-games` command greeting with a name which a user inserts can be performed. Each game contains such a greeting.

### Games demonstration

#### 1. Determining an even number:
[![asciicast](https://asciinema.org/a/qVuXo7G8qm4w4Ns7luyucoxuP.svg)](https://asciinema.org/a/qVuXo7G8qm4w4Ns7luyucoxuP)

#### 2. Calculator:
[![asciicast](https://asciinema.org/a/fT9GxtYnE3hbb9QCPKHfjZF3A.svg)](https://asciinema.org/a/fT9GxtYnE3hbb9QCPKHfjZF3A)

#### 3. Determining the greatest common divisor:
[![asciicast](https://asciinema.org/a/y6aWw8kBte6mWKlfr0YIQun6t.svg)](https://asciinema.org/a/y6aWw8kBte6mWKlfr0YIQun6t)

#### 4. Progression:
[![asciicast](https://asciinema.org/a/WJqpQTBkjGv5MEORmthshpZqi.svg)](https://asciinema.org/a/WJqpQTBkjGv5MEORmthshpZqi)

#### 5. Determining a prime number:
[![asciicast](https://asciinema.org/a/qOyBWp5kZYS2LKA31S8NIo9nr.svg)](https://asciinema.org/a/qOyBWp5kZYS2LKA31S8NIo9nr)