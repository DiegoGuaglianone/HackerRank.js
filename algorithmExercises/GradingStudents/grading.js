function gradingStudents(grades) {
    // Write your code here
    let finalgrades = []
    for(let i = 0; i<grades.length; i++)
    if(grades[i] < 38){
        finalgrades.push(grades[i]);
    }else{
        let round = Math.floor(grades[i]/5)*5+5;
        if(round - grades[i] < 3){
            finalgrades.push(round);
        }else{
            finalgrades.push(grades[i]);
        }
    }
    return finalgrades;
}