var y = 'Outer y';

class A {
    static field = 'Inner y';
    static {
        console.log("Static block luôn chạy trước")
        y = this.field;
    }
}

// var defined in static block is not hoisted
// console.log(y); // Inner y'
// console.log(A.field);
// "Static block luôn chạy trước"
// 'Inner y'
