const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sumArrayNumbers(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array");
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new Error("Input array contains non-integer values");
    }
    sum += arr[i];
  }

  return sum;
}

function getInputAndSum() {
  rl.question("Enter integers separated by spaces: ", (input) => {
    const inputArray = input.trim().split(" ").map(Number);

    try {
      const result = sumArrayNumbers(inputArray);
      console.log("Sum:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }

    rl.close();
  });
}

getInputAndSum();
