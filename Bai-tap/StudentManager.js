"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.students = [];
    }
    StudentManager.prototype.add = function () {
        var _a;
        var student = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            student[_i] = arguments[_i];
        }
        // this.students = [...this.students ,...student];
        console.log.apply(console, student);
        (_a = this.students).push.apply(_a, student);
    };
    StudentManager.prototype.showAll = function () {
        console.log(this.students);
    };
    StudentManager.prototype.updateScore = function (student, score) {
        student.score = score;
    };
    StudentManager.prototype.statistical = function () {
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        this.students.forEach(function (student) {
            if (student.score < 6) {
                count1++;
            }
            else if (student.score > 8) {
                count3++;
            }
            else {
                count2++;
            }
        });
        return "S\u1ED1 h\u1ECDc sinh d\u01B0\u1EDBi 6 \u0111i\u1EC3m l\u00E0: ".concat(count1, " \nS\u1ED1 h\u1ECDc sinh t\u1EEB 6 \u0111\u1EBFn 8 l\u00E0: ").concat(count2, " \nS\u1ED1 h\u1ECDc sinh l\u1EDBn h\u01A1n 8 \u0111i\u1EC3m l\u00E0 : ").concat(count3, " ");
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
