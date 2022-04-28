// var student_string = '{"name" : "Nguyen Van Cuong", "age" : "26"}'; // Json
//
// var student_obj = JSON.parse(student_string); // chuyển json thành object
// console.log(student_obj);
// console.log(typeof student_obj);
//
//
// var student_json = JSON.stringify(student_obj);
// console.log(student_json);
// console.log(typeof student_json);

// Lưu file
//@ts-ignore
const storage = require('node-persist');

//you must first call storage.init
 storage.init( /* options ... */ );
 storage.setItem('name',"student_json")
console.log(storage.getItem('name')); // yourname


