function solution(food) {
    let result = "";
    for(let i=1 ; i<food.length ; i++){
        if(food[i]%2===1){
            food[i]-=1
        }
        for(let j=0 ; j<food[i]/2 ; j++){
            result+=i.toString()
        }
    }
    result+="0"
    for(let i=food.length ; i>0 ; i--){
        for(let j=0 ; j<food[i]/2 ; j++){
            result+=i.toString()
        }
    }
    
    
    return result;
}