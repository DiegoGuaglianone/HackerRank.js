function hurdleRace(k, height) {
    // Write your code here
    let maxNumber = 0;
    for(let i = 0; i < height.length; i++){
        if(height[i]>maxNumber){
            maxNumber = height[i];
            console.log(maxNumber);
        }
    }
    if(k>maxNumber){
        return 0;
    }
    return maxNumber = Math.abs(maxNumber - k)
}