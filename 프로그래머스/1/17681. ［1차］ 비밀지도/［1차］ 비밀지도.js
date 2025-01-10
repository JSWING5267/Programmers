function solution(n, arr1, arr2) {
    let answer = [];
    
    for(let i=0; i<n ; i++){
        arr1[i] = arr1[i].toString(2)
        arr2[i] = arr2[i].toString(2)
        if(arr1[i].length<n){
            let emp=''
            for(let j=0 ; j<n-arr1[i].length ; j++){
                emp+='0'
            }
            arr1[i] = emp+arr1[i]
        }
        if(arr2[i].length<n){
            let emp=''
            for(let j=0 ; j<n-arr2[i].length ; j++){
                emp+='0'
            }
            arr2[i] = emp+arr2[i]
        }
        
        let no1 = arr1[i].split("")
        let no2 = arr2[i].split("")
        let now = ''
        for(let j=0 ; j<no1.length ; j++){
            if(no1[j] === '1' || no2[j] === '1'){
                now+="#"
            }
            else now+=' '
        }
        answer.push(now)
    }
    return answer;
}