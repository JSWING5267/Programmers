function solution(arr) {
    let sum=0;
    let cnt=0;
    const Inside = arr.map(function(a){
        sum+=a;
        cnt++;
    });
    return sum/cnt;
}