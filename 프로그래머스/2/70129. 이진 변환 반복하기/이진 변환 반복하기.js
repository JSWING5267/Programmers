function solution(s) {
    let answer = [];
    let sum1=0;
    let sum2=0;
    let arr;
    
    while(true){
        if(s==="1") break;
        if(s.match(/0/g)!==null) sum2+=s.match(/0/g).length
        s = [...s.replace(/0/g,"")].join("").length.toString(2)
        sum1++;
    }
    return [sum1,sum2];
}