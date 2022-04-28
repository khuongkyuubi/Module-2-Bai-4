import {Role, User} from "./User";

let admin = new User("Admin1", "hello.kitty@gmail.com", Role.ADMIN);
let khuongle = new User("KhuongLe", "hello.khuong@gmail.com", Role.USER);

console.log(admin.getInfo())
admin.isAdmin(); // true

console.log(khuongle.getInfo())
khuongle.isAdmin(); // false