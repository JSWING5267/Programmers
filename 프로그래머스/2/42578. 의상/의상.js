function solution(clothes) {
    let sum = 1;
    let Ph = new Map();
    
    for(let p of clothes){
        Ph.set(p[1],Ph.get(p[1])+1 || 1)
    }
    for(let [p,h] of Ph){
        sum*=(h+1);
    }
    return sum-1;
}