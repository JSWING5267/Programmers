function solution(n) {
    var answer = 0;
    let arr = [0, 1];
    
    for(let i=2 ; i<=n ; i++){
        arr[i]=BigInt(arr[i-1])+BigInt(arr[i-2])
    }
    
    return arr[n]%BigInt(1234567);
}