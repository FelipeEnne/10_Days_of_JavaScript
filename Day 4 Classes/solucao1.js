/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon{

    
    constructor([t, r , b  = 0, l = 0,p = 0]) {
        this.t = t;
        this.r = r;
        this.b = b;
        this.l = l;
        this.p = p;
        //console.log(this.t);
    }

   perimeter() {
       return (this.t + this.r + this.b + this.l + this.p);
    }


}


const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());