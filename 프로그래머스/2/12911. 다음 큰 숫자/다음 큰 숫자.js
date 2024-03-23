function solution(n) {
    let count = [...n.toString(2)].filter((re) => re === "1").length
    
    while(true){
        n++
        if(count===[...n.toString(2)].filter((re) => re === "1").length) return n
    }
}