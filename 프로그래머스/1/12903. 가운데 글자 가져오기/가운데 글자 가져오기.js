function solution(s) {
    var answer = [...s];
    
    
    if(answer.length%2===1) return answer[parseInt(answer.length/2)];
    else return answer[parseInt(answer.length/2)-1]+answer[parseInt(answer.length/2)];
}
