function solution(brown, yellow) {
    let answer = [];
    let sum = brown + yellow;
    
    for(let y=3 ; y<=Math.floor(brown/2) ; y++){
        for(let x=3 ; x<=Math.floor(brown/2) ; x++){
            if((x-2)*(y-2)===yellow && x*y===sum){
                answer.push(x,y)
                return answer
                break
            }
        }
    }
}