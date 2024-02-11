function solution(n) {
    let answer = [];
    let cnt = 0;
    
    while(true){
        answer[cnt]=n%10;
        cnt++;
        n=parseInt(n/10);
        if(n<=0) break;
    }
    return answer;
}