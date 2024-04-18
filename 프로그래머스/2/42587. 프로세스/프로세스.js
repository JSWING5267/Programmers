function solution(priorities, location) {
    let answer = 1;
    let arr = priorities.map((i,index)=>index)
    
    while(priorities.length){
        const max = Math.max(...priorities);
        if(priorities[0]===max){
            if(arr[0]===location){
                return answer
            }
            else{
                answer++;
                priorities.shift();
                arr.shift();
            }
        }
        else{
            priorities.push(priorities.shift())
            arr.push(arr.shift())
        }
    }
    
    return answer;
}