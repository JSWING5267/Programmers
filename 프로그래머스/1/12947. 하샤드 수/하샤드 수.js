function solution(x) {
    let sum = 0;
    let xx = x;
    
    while(true){
        sum+=x%10;
        x=parseInt(x/10);
        if(x<=0) break;
    }
    if(xx%sum===0) return true;
    else return false;
}