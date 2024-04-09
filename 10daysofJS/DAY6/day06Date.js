// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName = new Date(dateString);
    let tryDate = dayName.getDay();
    switch(tryDate){
        case 0:
        tryDate = "Sunday";
        break;
        case 1:
        tryDate = "Monday";
        break;
        case 2:
        tryDate = "Tuesday";
        break;
        case 3:
        tryDate = "Wednesday";
        break;
        case 4:
        tryDate = "Thursday ";
        break;
        case 5:
        tryDate = "Friday";
        break;
        case 6:
        tryDate = "Saturday";
        break;
        default:
        return "invalid date"
    }

    return tryDate;
}