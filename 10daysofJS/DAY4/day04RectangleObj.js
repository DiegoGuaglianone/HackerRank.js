function Rectangle(a, b) {
    let rectangle = {
        length: a,
        width: b,
        perimeter: 2*(a+b),
        area: a*b
    };
    return rectangle;
}