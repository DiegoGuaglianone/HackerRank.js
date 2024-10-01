function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a,b)=>a-b);
    let minArr = 0;
    let maxArr = 0;
    for(let i = 0; i < 4; i++){
        minArr += arr[i];
        } for(let j = 1; j <= 4; j++){
            maxArr += arr[j];
        }
        console.log(minArr,maxArr);
}

//maybe it could be solved easier, i'll try to improve that code later