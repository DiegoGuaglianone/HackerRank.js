function main() {
    const PI = Math.PI;
    let r = readLine();
    let area = PI*(r*r);
    console.log(area);
    let perimeter = PI*2*r;
    console.log(perimeter);
        try {    
            // Attempt to redefine the value of constant variable PI
            PI = 0;
            // Attempt to print the value of PI
            console.log(PI);
        } catch(error) {
            console.error("You correctly declared 'PI' as a constant.");
        }
    }