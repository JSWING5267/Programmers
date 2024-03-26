function solution(numbers) {
    let answer = [];
    let check = [];
    
    for(let i=0 ; i<numbers.length ; i++){
        for(let j=i+1 ; j<numbers.length ; j++){
            check[numbers[i]+numbers[j]]=1;
        }
    }
    for(let i=0 ; i<=200 ; i++){
        if(check[i]===1) answer.push(i)
    }
    return answer;
}