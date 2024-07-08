function solution(nums) {
    let arr = nums.sort((a,b)=>a-b);
    let first = 0;
    let res = 0;
    
    for(let i=0 ; i<nums.length ; i++){
        if(nums[i]!==first){
            res++;
            first = nums[i];
        }
    }
    if(res>nums.length/2) return nums.length/2;
    else return res;
}