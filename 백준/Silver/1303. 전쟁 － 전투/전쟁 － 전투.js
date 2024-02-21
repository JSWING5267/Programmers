const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [yleng, xleng] = input.shift().split(" ").map(Number);
const maze = input.map((v) => v.split("").map(String));
const dy = [0, 0, 1, -1];
const dx = [-1, 1, 0, 0];
let [white, blue] = [0, 0];

for (let i = 0; i < xleng; i++) {
  for (let j = 0; j < yleng; j++) {
    if (maze[i][j]) bfs(i, j);
  }
}

function bfs(x, y) {
  const queue = [[x, y]];
  let count = 0;
  const team = maze[x][y];

  maze[x][y] = 0;

  while (queue.length) {
    const [cx, cy] = queue.shift();
    count++;

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      // 전쟁터 밖으로 벗어나지 않았고, 현재값과 다음 인접한 위치의 값이 같은 경우
      if (
        nx >= 0 &&
        nx < xleng &&
        ny >= 0 &&
        ny < yleng &&
        maze[nx][ny] == team
      ) {
        maze[nx][ny] = 0;
        queue.push([nx, ny]);
      }
    }
  }
  team === "W" ? (white += count ** 2) : (blue += count ** 2);
}

console.log(white + " " + blue);
