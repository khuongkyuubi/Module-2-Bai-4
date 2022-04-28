"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Role = void 0;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role = exports.Role || (exports.Role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        return "Name: ".concat(this.name, " \nEmail: ").concat(this.email, " \nRole: ").concat(this.role);
    };
    User.prototype.isAdmin = function () {
        if (this.role === 1) {
            console.log("Admin");
            return true;
        }
        console.log("User");
        return false;
    };
    return User;
}());
exports.User = User;
