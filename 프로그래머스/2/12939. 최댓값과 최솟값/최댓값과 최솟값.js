function solution(s) {
    var answer = '';
    let a = s.split(" ").map(x=>+x)
    
    return Math.min(...a)+" "+Math.max(...a)
}