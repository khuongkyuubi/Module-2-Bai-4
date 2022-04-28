"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var admin = new User_1.User("Admin1", "hello.kitty@gmail.com", User_1.Role.ADMIN);
var khuongle = new User_1.User("KhuongLe", "hello.khuong@gmail.com", User_1.Role.USER);
console.log(admin.getInfo());
admin.isAdmin(); // true
console.log(khuongle.getInfo());
khuongle.isAdmin(); // false
