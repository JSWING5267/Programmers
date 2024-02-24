function solution(s){
    let arr = [...s];
    let p = 0;
    let y = 0;
    
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]==="p" || arr[i]==="P") p++;
        if(arr[i]==="y" || arr[i]==="Y") y++;
    }
    if(p===y) return true;
    else return false;
}