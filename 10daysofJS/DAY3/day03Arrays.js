function getSecondLargest(nums) {
    // Complete the function
    let aux = 0;
    let aux2 = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i]>aux){
            aux2=aux;
            aux=nums[i];
        }else if(nums[i]>aux2 && nums[i] !== aux){
            aux2 = nums[i];
        }
    }
    return aux2;
};
