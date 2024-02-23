function solution(array, commands) {
    var answer = [];
    let arrayslice = [];
    
    for(let i=0 ; i<commands.length ; i++){
            arrayslice[i] = array.slice(commands[i][0]-1,commands[i][1]);
            //console.log(arrayslice);
            arrayslice[i].sort((a,b)=>a-b);
            answer[i] = arrayslice[i][commands[i][2]-1];
        
    }
    
    return answer;
}