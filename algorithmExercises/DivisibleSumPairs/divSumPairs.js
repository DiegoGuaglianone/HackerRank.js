function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let aux = 0
    for(let i = 0; i<ar.length; i++){
        const fixedNum = ar[i];
        for(let j=i+1; j<=ar.length; j++){
            if((fixedNum+ar[j])%k === 0){
                aux++;
            }
        }
    }
    return aux;
}