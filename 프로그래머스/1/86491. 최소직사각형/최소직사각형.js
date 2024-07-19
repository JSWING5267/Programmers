function solution(sizes) {
    let max1 = 0;
    let max2 = 0;
    
    for(let i=0 ; i<sizes.length ; i++){
        sizes[i].sort((a,b)=>a-b);
    }
    for(let [v,p] of sizes){
        if(max1<v) max1 = v;
        if(max2<p) max2 = p;
    }
    return max1*max2;
}