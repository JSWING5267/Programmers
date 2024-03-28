function solution(n, m) {
    let answer = [];
    let big = Math.max(n,m)
    let small = Math.min(n,m)
    
    for(let i=1 ; i<=big ; i++){
        if(n%i===0 && m%i===0) answer[0]=i
    }
    for(let i=n*m ; i>=small ; i--){
        if(i%n===0 && i%m===0) answer[1]=i
    }
    return answer;
}