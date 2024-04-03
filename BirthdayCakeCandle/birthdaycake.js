function birthdayCakeCandles(candles) {
    let aux = 0;
    let comp = 0;
    for(let i=0; i<candles.length; i++){
        if( comp < candles[i] ){
            comp = candles[i];
            aux = 1;
        } else if(comp === candles[i]){
            aux += 1;
        }
    }
    return aux;
}