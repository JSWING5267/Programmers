function solution(k, score) {
    let answer = []
    let result = []
    
    

    for(let i=0 ; i<score.length ; i++){
        if(i<k){
            answer.push(score[i])
            result.push(Math.min(...answer))
        }
        else{
            answer.push(score[i])
            now = answer.sort((a,b)=>b-a)
            result.push(now[k-1])
        }
    }
    return result;
}