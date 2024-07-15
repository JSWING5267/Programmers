function solution(phone_book) {
    let Ph = new Map();
    for(let p of phone_book){
        Ph.set(p,true)
    }
    for(let p of phone_book){
        for(let i=0 ; i<p.length ; i++){
            const sub = p.substring(0,i);
            if(Ph.get(sub)) return false;
        }
    }
    return true;
}