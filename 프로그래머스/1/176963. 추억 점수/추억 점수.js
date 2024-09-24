function solution(name, yearning, photo) {
    let answer = new Map();
    let pf = new Map();
    let final = Array.from({length:photo.length},()=>0)
    for(let i=0 ; i<name.length ; i++){
        pf.set(name[i],yearning[i])
        answer.set(name[i],0)
    }
    for(let i=0 ; i<photo.length ; i++){
        for(let j=0 ; j<photo[i].length ; j++){
            if(pf.get(photo[i][j])){
                final[i]+=pf.get(photo[i][j])
            }
        }
    }
    return final;
}