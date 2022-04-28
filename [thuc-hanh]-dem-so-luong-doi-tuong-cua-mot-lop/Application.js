"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
exports.Application = Application;
console.log(Application.count); // 0
var app1 = new Application('App One'); // Khi khởi tạo đối tượng sẽ gọi đến hàm constructor
console.log(Application.count); // 1
var app2 = new Application('App Two');
console.log(Application.count); // 2
