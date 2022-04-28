"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
var Instructor = /** @class */ (function () {
    //@ts-ignore
    function Instructor(_a) {
        var _b = _a === void 0 ? {} : _a, name = _b.name, _c = _b.role, role = _c === void 0 ? "assistant" : _c;
        this.name = name;
        this.role = role;
    }
    //Instance method
    Instructor.prototype.renderDetails = function () {
        console.log("".concat(this.name, " - ").concat(this.role));
    };
    // Base case static method
    Instructor.helloWorld = function () {
        console.log("Hi there");
    };
    // Static method
    Instructor.canTeach = function (instructor) {
        return (instructor.role === "classroom");
    };
    return Instructor;
}());
exports.Instructor = Instructor;
