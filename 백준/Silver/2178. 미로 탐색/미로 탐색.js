const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const [yleng, xleng] = input.shift().split(" ").map(Number);
const maze = input.map((v) => v.split("").map(Number));
const dy = [0, 0, 1, -1];
const dx = [-1, 1, 0, 0];

let now = [[0, 0, 1]];

while (now.length) {
  const [curY, curX, move] = now.shift();

  if (curX === xleng - 1 && curY === yleng - 1) console.log(move);

  for (let i = 0; i < 4; i++) {
    const ny = dy[i] + curY;
    const nx = dx[i] + curX;

    if (ny >= 0 && nx >= 0 && ny < yleng && nx < xleng && maze[ny][nx] === 1) {
      maze[ny][nx] = 0;
      now.push([ny, nx, move + 1]);
    }
  }
}
