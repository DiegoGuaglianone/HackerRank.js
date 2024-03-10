function timeConversion(s) {
    //the function .slice separe the strign (InitialIndex, FinishIndex)
    //if these function haves only one value, means this index until the end
    
    //the function .split has a "separator" that will be used to transform the string 
    //into an array
    
    let amPm = s.slice(-2); //separe the AM/PM
    let time = s.slice(0, -2);
    let [hours, minutes, seconds] = time.split(":"); //will divide the string in an array ever ":"
    if(amPm === "PM" && hours !== "12" ){
        hours = parseInt(hours) + 12;
    }else if(amPm === "AM" && hours == "12"){
        hours = "00";
    }
    
   return `${hours}:${minutes}:${seconds}`;
}