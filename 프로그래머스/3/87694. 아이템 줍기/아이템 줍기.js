function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0;
    characterX*=2;
    characterY*=2;
    itemX*=2;
    itemY*=2;
    let dobuleRec = rectangle.map(rec => rec.map(point => point * 2));
    
    const arr = Array.from({length:103},()=>Array(103).fill(0));
    dobuleRec.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1; i <= x2; i++) {
          for (let j = y1; j <= y2; j++) {
            if (i === x1 || i === x2 || j === y1 || j === y2) {
              if (arr[i][j] === 0) arr[i][j] = 1;
            } else {
              arr[i][j] = 2;
            }
          }
        }
    });
    const dy = [1,0,-1,0];
    const dx = [0,1,0,-1]
    
    let que = [[characterX,characterY,0]];
    arr[characterX][characterY]=0;
    while(que.length>0){
        let [x,y,cnt] = que.shift();
        if(x===itemX && y===itemY) return cnt/2;
        
        for(i=0 ; i<4 ; i++){
            let newX = x + dx[i];
            let newY = y + dy[i];
            
            if(arr[newX][newY] === 1){
                que.push([newX,newY,cnt+1]);
                arr[newX][newY]=0;
            }
        }
    }
    return answer;
}