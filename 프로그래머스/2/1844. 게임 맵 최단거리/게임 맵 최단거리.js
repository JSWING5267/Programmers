function solution(maps) {
    let yleng = maps.length;
    let xleng = maps[0].length;
    let xgoal = xleng-1;
    let ygoal = yleng-1;
    const dy = [0, 0, 1, -1];
    const dx = [-1, 1, 0, 0];
    
    let now = [];
    now.push([0, 0, 1]);
    
    while(now.length){
        const [curY, curX, move] = now.shift();
        if(curX === xgoal && curY === ygoal) return move;
        
        for(let i = 0; i < 4; i++) {
            const ny = curY + dy[i];
            const nx = curX + dx[i];
            if(ny >= 0 && ny < yleng && nx >= 0 && nx < xleng && maps[ny][nx] === 1) {
                now.push([ny, nx, move + 1]);
                maps[ny][nx] = 0;
            }
        }
    }
    return -1;
}