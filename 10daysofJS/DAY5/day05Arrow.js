// function modifyArray(nums) {
//     let mArr = [];
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i]%2 === 0){
//             mArr.push(nums[i]*2);
//         }else{
//             mArr.push(nums[i]*3);
//         }
//     }
//     return mArr;
// }
//  Older function that i've created


function modifyArray(nums) {
    return nums.map((values)=>values%2!=0?values*3:values*2);
}
