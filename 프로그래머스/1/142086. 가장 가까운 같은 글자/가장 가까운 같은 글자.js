function solution(s) {
    let arr = [...s];
    let pF = new Map();
    let answer = [];
    
    for(let i=0 ; i<arr.length ; i++){
        if(pF.get(arr[i])){
            answer[i]=i+1-pF.get(arr[i]);
        }
        else{
            answer[i]=-1;
        }
        pF.set(arr[i],i+1);
    }
    return answer;
}