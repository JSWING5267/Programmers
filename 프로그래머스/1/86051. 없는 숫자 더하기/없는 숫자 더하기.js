function solution(numbers) {
    let sum = 0;
    let check = [];
    
    for(let i =0 ; i<numbers.length ; i++){
        check[numbers[i]]=1;
    }
    for(let i =0 ; i<=9 ; i++){
       if(check[i]!==1){
           sum+=i;
       }
    }
    return sum;
}