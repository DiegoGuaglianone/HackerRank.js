function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    // 7 to 11 is the house (s,t) 
    // 5 is a point
    // 15 is b point
    // 3 apples and 2 oranges
    // distance apple [-2 2 1]
    // distance orange [5 -6]
    
    var applein = 0;
    var orangesin = 0;
    
    for(let i = 0; i<apples.length; i++){
        if(apples[i]+ a >= s && apples[i]+a <= t){
            applein = applein + 1;
        }
    }
    for(let i = 0; i<oranges.length; i++){
        if(oranges[i]+ b <= t && oranges[i]+b >= s){
            orangesin = orangesin + 1;
        }
    }
    console.log(applein);
    console.log(orangesin);
}
