function solution(s) {
    var answer = [...s];
    
    const reverse = answer.sort().reverse().join("");
    
    return reverse;
}