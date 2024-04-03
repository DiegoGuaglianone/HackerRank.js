function kangaroo(x1, v1, x2, v2) {
    let A = "";
    if(x1 === x2 && v1 === v2){
        A = "YES";
    }
    
    if(v2 < v1 && Math.abs(x1-x2) % Math.abs(v2-v1) === 0 ){
        A = "YES";
    }else{
        A = "NO";
    }
    return A;
}