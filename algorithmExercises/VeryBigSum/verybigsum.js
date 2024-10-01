function aVeryBigSum(ar) {
    // Write your code here
    
    return ar.reduce((aux,now)=> aux + now, 0); 
    
    // let aux =0;
    // for(let i = 0; i< ar.length; i++){
    //     aux += ar[i];
    // }
    // return aux;
}