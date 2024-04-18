function solution(n, computers) {
    let answer = 0;
    let visit = new Array(n).fill(0)
    
    for(i=0 ; i<n ; i++){
        if(visit[i]===0){
            dfs(i)
            answer++;
        }
    }
    function dfs(level){
        for(let i=0 ; i<n ; i++){
            if(computers[level][i]===1 && level!==i){
                computers[level][i]=0;
                visit[i]=1;
                dfs(i)
            }
        }
    }
    return answer;
}