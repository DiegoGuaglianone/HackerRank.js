/*
 * Create the function factorial here
 */
function factorial(n){
    let aux = 1;
    for(let i = n; i>0; i--){
        aux = aux*i;
    }
    return aux;
}