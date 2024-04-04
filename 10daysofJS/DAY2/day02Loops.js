function vowelsAndConsonants(s) {
    const vowels = "aeiouAEIOU";
    const cons = [];
    for (let i = 0; i < s.length; i++){
        if(vowels.includes(s.charAt(i))){
            console.log(s.charAt(i));
        }else{
            cons.push(s.charAt(i));
        }
    }
    for (let j = 0; j < cons.length; j++) {
        console.log(cons[j]);
    }
}