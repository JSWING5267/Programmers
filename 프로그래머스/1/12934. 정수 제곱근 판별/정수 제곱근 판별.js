function solution(n) {
    var answer = 0;
    console.log();
    if(Number.isInteger(Math.sqrt(n))){
        return (Math.sqrt(n)+1)**2;
    }
    else return -1;
}