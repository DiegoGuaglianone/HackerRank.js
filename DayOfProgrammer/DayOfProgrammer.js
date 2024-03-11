function dayOfProgrammer(year) {
    let dd, mm, yyyy;
    if ((year < 2000 && year % 4 === 0 && year % 100 === 0) || (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 100 === 0)) {
        dd = 12;
        mm = '09';
        yyyy = year;
    }else if(year === 1918){
        dd = 26;
        mm = '09';
        yyyy = year;
    }else{
        dd = 13;
        mm = '09';
        yyyy = year;
    }
    return `${dd}.${mm}.${yyyy}`;
}