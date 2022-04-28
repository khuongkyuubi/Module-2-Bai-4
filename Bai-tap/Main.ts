import {Student} from "./Student";
import {StudentManager} from "./StudentManager";

let student1 = new Student("An", "C0322H1", 9);
let student2 = new Student("An 2", "C0322H1", 10);
let student3 = new Student("An 3", "C0322H1", 9);
let student4 = new Student("Thịnh Cá chép 2", "C0322H1", 2);
let student5 = new Student("Thịnh Cá chép 3", "C0322H1", 5);
let student6 = new Student("Thịnh Cá chép 4", "C0322H1", 4);
let student7 = new Student("Thành 5K 2", "C0322H1", 7);
let student8 = new Student("Thành 5K 3", "C0322H1", 6);
let student9 = new Student("Thành 5K 5", "C0322H1", 8);
let student10 = new Student("Thành 5K 6", "C0322H1", 8);

let listStudents = new StudentManager();

listStudents.add(student1,student2,student3,student4,student5,student6,student7,student8,student9);
listStudents.add(student10);
console.log(listStudents.statistical());
let {students} = listStudents;
console.log(students);


