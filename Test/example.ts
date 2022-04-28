// Ví dụ 1
class ClassWithStaticMethod {
    static staticProperty: string = " someValue";
    // staticProperty: ;

    static staticMethod() {
        return "static method has been called";
    }
    // static block, luôn được chạy khi gọi đến class
    static {
        console.log("Class static initialization block called")
    }

}
/*
console.log(ClassWithStaticMethod.staticProperty);
console.log(ClassWithStaticMethod.staticMethod());

let test = new ClassWithStaticMethod();
//@ts-ignore // thêm comment này để suppress all error
console.log(test.staticProperty) // Báo lỗi => static chỉ dùng cho class, đối tượng không dùng được
//test

//Ví dụ 2
class Circle {
    static pi = 3.14;
    pi2 : number = 3.1456;

    static calculateArea(radius:number) {
        //@ts-ignore
        let area = this.pi2 * radius * radius // Báo lỗi ngay
        return this.pi * radius * radius;
        // this lúc này chỉ đến chính thuộc tình cùng kiểu static, nên chỉ có thể chỉ đến this.pi. còn this.pi2 sẽ báo lỗi
    }

    // Với phương thức non-static phải truy cập thuộc tính static qua tên lớp như bình thường (kể cả đối tượng tạo từ lớp này cũng vật)
    calculateCircumference(radius:number):number {
        return 2 * Circle.pi * radius;
    }
}

Circle.calculateArea(5); // returns 78.5
*/
