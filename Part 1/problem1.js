const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function printNumbersWithSubstitutions(x, y) {
  for (let i = 1; i <= 100; i++) {
    if (i % x === 0 && i % y === 0) {
      console.log("FooBar");
    } else if (i % x === 0) {
      console.log("Foo");
    } else if (i % y === 0) {
      console.log("Bar");
    } else {
      console.log(i);
    }
  }
}

rl.question("Enter the value for x: ", (x) => {
  rl.question("Enter the value for y: ", (y) => {
    const numX = parseInt(x, 10);
    const numY = parseInt(y, 10);

    printNumbersWithSubstitutions(numX, numY);
    rl.close();
  });
});
