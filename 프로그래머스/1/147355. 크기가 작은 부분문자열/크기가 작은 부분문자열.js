function solution(t, p) {
    let answer = 0;
    let t2 = [...t]
    for(let i=0 ; i<t.length-p.length+1 ; i++){
        const now = t2.slice(i,i+p.length).map(Number).join("");
        if(now<=p) answer++;
    }
    return answer;
}