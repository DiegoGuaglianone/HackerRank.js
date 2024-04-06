/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(sides){
    this.sides = sides;
    }
    perimeter() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

/* A função ".reduce" recebe dois parametros, "sum" que é a variavel que vai receber as somas que é selecionada para 0
 * "side" é o valor da array da função "sides"
 * => indica qual operação esta sendo realizada sum+side
 */