function breakingRecords(scores) {
    // Write your code here
    let auxMax = 0;
    let auxMin = 0;
    let output = [0,0];
    for(let i = 0; i < scores.length; i++) {
        if(i === 0){
            auxMax = scores[i];
            auxMin = scores[i];
        } else if(scores[i] > auxMax){
            auxMax = scores[i];
            output[0] += 1;
        } else if(scores[i] < auxMin){
            auxMin = scores[i];
            output[1] += 1;
        }
    }
    return output;
}