function diagonalDifference(arr) {
    // Write your code here
    let auxR = 0;
    let auxL = 0;
    for(let i=0; i<arr.length; i++){
        auxR += arr[i][i];
        auxL += arr[i][arr.length - 1 - i]
    }
    let dif = Math.abs(auxR - auxL);
    return dif;
}