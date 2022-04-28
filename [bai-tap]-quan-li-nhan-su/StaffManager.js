"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffManager = void 0;
var StaffManager = /** @class */ (function () {
    function StaffManager() {
    }
    StaffManager.prototype.showList = function () {
        //@ts-ignore
        console.log("Last Name".padEnd(10), "First Name".padEnd(15), "Birthday".padEnd(20), "Address".padEnd(15), "Poisition".padEnd(25));
        StaffManager.staffs.forEach(function (staff) {
            //@ts-ignore
            var lastName = staff._lastName, firstName = staff._firstName, dob = staff._dob, address = staff._address, position = staff._position;
            //@ts-ignore
            console.log("".concat(lastName).padEnd(10), "".concat(firstName).padEnd(15), "".concat(dob).padEnd(20), "".concat(staff.address).padEnd(15), "".concat(position).padEnd(25));
        });
    };
    StaffManager.prototype.addStaff = function () {
        var _a;
        var staff = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            staff[_i] = arguments[_i];
        }
        (_a = StaffManager.staffs).push.apply(_a, staff);
    };
    StaffManager.prototype.removeStaff = function (index) {
        StaffManager.staffs.splice(index, 1);
    };
    // Destructuring default value
    StaffManager.prototype.editStaffInfo = function (index, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.lastName, lastName = _c === void 0 ? StaffManager.staffs[index].lastName : _c, _d = _b.firstName, firstName = _d === void 0 ? StaffManager.staffs[index].firstName : _d, _e = _b.dob, dob = _e === void 0 ? new Date(StaffManager.staffs[index].dob) : _e, _f = _b.address, address = _f === void 0 ? StaffManager.staffs[index].address : _f, _g = _b.position, position = _g === void 0 ? StaffManager.staffs[index].position : _g;
        StaffManager.staffs[index].lastName = lastName;
        StaffManager.staffs[index].firstName = firstName;
        StaffManager.staffs[index].dob = dob;
        StaffManager.staffs[index].address = address;
        StaffManager.staffs[index].position = position;
    };
    StaffManager.staffs = [];
    return StaffManager;
}());
exports.StaffManager = StaffManager;
