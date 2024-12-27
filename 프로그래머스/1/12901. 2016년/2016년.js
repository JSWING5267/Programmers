function solution(a, b) {
    let sum = 0;
    let arr = ['FRI','SAT','SUN','MON','TUE','WED','THU']
    a-=1
    while(a>0){
        if(a<8){
            if(a%2===1){
                sum+=31
            }
            else if(a===2){
                sum+=29
            }
            else{
                sum+=30
            }
        }
        else{
            if(a%2===1){
                sum+=30
            }
            else{
                sum+=31
            }
        }
        a-=1
    }
    sum+=(b-1)
    return arr[sum%7];
}