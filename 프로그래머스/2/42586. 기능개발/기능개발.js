function solution(progresses, speeds) {
    let answer = [];
    let time = [];
    let max = -1;
    for(let i=0 ; i<progresses.length ; i++){
        time[i] = Math.ceil((100-progresses[i])/speeds[i])
    }
    time.push(101);
    for(let i=0 ; i<time.length ; i++){
        max = time[i]
        for(let j=i+1 ; j<time.length ; j++){
            if(time[j]>max){
                answer.push(j-i)
                i=j-1;
                break;
            }
        }
    }
    return answer;
}