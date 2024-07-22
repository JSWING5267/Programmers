function solution(answers) {
    let answer = [];
    let a1 = [1,2,3,4,5];
    let b1 = [2,1,2,3,2,4,2,5];
    let c1 = [3,3,1,1,2,2,4,4,5,5];
    const length = answers.length;
    let sum1, sum2, sum3 = 0;
    
    const amax = answers.filter((a,i)=>a===a1[i%a1.length]).length
    const bmax = answers.filter((a,i)=>a===b1[i%b1.length]).length
    const cmax = answers.filter((a,i)=>a===c1[i%c1.length]).length
    
    let max = Math.max(amax,bmax,cmax);
    
    if (amax === max) {answer.push(1)};
    if (bmax === max) {answer.push(2)};
    if (cmax === max) {answer.push(3)};
    
    return answer;
}