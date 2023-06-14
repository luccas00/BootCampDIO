const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter input: ', (line) => {
  console.log(line); // Prints the input data
  rl.close();
});