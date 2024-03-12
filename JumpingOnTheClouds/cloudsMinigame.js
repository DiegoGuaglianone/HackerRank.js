function jumpingOnClouds(c) {
    
    //The idea here is manipulate where the player is, using the 'let i' to know that
    //How the 'let jump' is after the loop, we need to -1, cause we don't check if it possible
    //We are using while, cause for don't allow us to manipulate the 'let i' correctly
    
    let jumps = 0;
    let i = 0;
    while(i < c.length){
        if(i + 2 < c.length && c[i + 2] === 0){
            i += 2;
        }else{
            i += 1;
        }
        jumps++;
    }
    return jumps - 1;
}