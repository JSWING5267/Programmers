const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const number = input[0];
let arr = [0];

function dp(n) {
  if (n < 3) arr[n] = 1;
  if (!arr[n]) {
    arr[n] = BigInt(dp(n - 1)) + BigInt(dp(n - 2));
  }
  return arr[n];
}

console.log(dp(number).toString());
