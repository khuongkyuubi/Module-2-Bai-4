import {Instructor} from "./Instructor";

let juniorInstructor = new Instructor({'name': 'Brian'});
let seniorInstructor = new Instructor({'name': 'Alice', "role": "classroom"});

juniorInstructor.renderDetails(); // "Brian - assistant"
seniorInstructor.renderDetails(); // "Alice - classroom"
Instructor.helloWorld(); // "Hi there"

// "Brian can teach: false"
console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
);

// "Alice can teach: true"
console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
);

// console.log({
//     key : 1,
// }.key)

function test({a = 10, b = 5} = {a: 3}) {
    console.log(a);
    console.log(b);

}

test({a: 3});

const {a, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5