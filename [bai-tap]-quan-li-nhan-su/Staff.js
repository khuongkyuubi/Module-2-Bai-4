"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff(lastName, firstName, dob, address, position) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._dob = dob.toDateString();
        this._address = address;
        this._position = position;
    }
    Object.defineProperty(Staff.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "dob", {
        //@ts-ignore
        get: function () {
            return this._dob;
        },
        set: function (date) {
            this._dob = date.toDateString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            this._position = value;
        },
        enumerable: false,
        configurable: true
    });
    return Staff;
}());
exports.Staff = Staff;
