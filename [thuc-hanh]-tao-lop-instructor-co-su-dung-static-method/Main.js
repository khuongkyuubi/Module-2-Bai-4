"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instructor_1 = require("./Instructor");
var juniorInstructor = new Instructor_1.Instructor({ name: 'Brian' });
var seniorInstructor = new Instructor_1.Instructor({ name: 'Alice', role: "classroom" });
juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"
Instructor_1.Instructor.helloWorld(); // "Hi there"
// "Brian can teach: false"
console.log("".concat(juniorInstructor.name, " can teach: ").concat(Instructor_1.Instructor.canTeach(juniorInstructor)));
// "Alice can teach: true"
console.log("".concat(seniorInstructor.name, " can teach: ").concat(Instructor_1.Instructor.canTeach(seniorInstructor)));
// console.log({
//     key : 1,
// }.key)
function test(_a) {
    var _b = _a === void 0 ? { a: 3 } : _a, _c = _b.a, a = _c === void 0 ? 10 : _c, _d = _b.b, b = _d === void 0 ? 5 : _d;
    console.log(a);
    console.log(b);
}
test({ a: 3 });
var _a = { a: 3 }, a = _a.a, _b = _a.b, b = _b === void 0 ? 5 : _b;
console.log(a); // 3
console.log(b); // 5
