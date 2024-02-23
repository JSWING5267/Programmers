function solution(numbers) {
    let answer = numbers.map((v)=>v+"").sort((a,b)=>(b+a)-(a+b)).join("");
    
   // console.log(array);
   return answer[0]==='0'? '0' : answer;
}