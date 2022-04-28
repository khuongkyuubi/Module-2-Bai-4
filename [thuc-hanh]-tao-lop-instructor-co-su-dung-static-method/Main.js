"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instructor_1 = require("./Instructor");
var juniorInstructor = new Instructor_1.Instructor({ 'name': 'Brian' });
var seniorInstructor = new Instructor_1.Instructor({ 'name': 'Alice', "role": "classroom" });
juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"
Instructor_1.Instructor.helloWorld(); // "Hi there"
// "Brian can teach: false"
console.log("".concat(juniorInstructor.name, " can teach: ").concat(Instructor_1.Instructor.canTeach(juniorInstructor)));
// "Alice can teach: true"
console.log("".concat(seniorInstructor.name, " can teach: ").concat(Instructor_1.Instructor.canTeach(seniorInstructor)));
