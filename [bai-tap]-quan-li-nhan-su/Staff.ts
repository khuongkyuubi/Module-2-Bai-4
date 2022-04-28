export class Staff {
    private _lastName: string;
    private _firstName: string;
    private _dob: string;
    private _address: string;
    private _position: string;

    constructor(lastName: string,
                firstName: string,
                dob: Date,
                address: string,
                position: string) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._dob = dob.toDateString();
        this._address = address;
        this._position = position;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    //@ts-ignore
    get dob(): string {
        return this._dob;
    }

    set dob(date: Date) {
        this._dob = date.toDateString();
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get position(): string {
        return this._position;
    }

    set position(value: string) {
        this._position = value;
    }
}