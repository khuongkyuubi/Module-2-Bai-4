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
        this._name = name;
        this._email = email;
        this._role = role;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getInfo = function () {
        return "Name: ".concat(this._name, " \nEmail: ").concat(this._email, " \nRole: ").concat(this._role);
    };
    User.prototype.isAdmin = function () {
        if (this._role === 1) {
            console.log("Admin");
            return true;
        }
        console.log("User");
        return false;
    };
    return User;
}());
exports.User = User;
