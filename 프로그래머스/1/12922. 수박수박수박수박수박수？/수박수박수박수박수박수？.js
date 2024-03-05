function solution(n) {
    var answer = '';
    let trigger = true;
    
    for(let i = 0 ; i<n ; i++){
        if(trigger){ answer+="수";
                   trigger = false;}
        else{ answer+="박";
             trigger=true;}
    }
    
    return answer;
}