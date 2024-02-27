function solution(n) {
    var answer = 0;
    let arr = Array.from(String(n));
    
    return +arr.sort((a,b)=>b-a).join("");
}