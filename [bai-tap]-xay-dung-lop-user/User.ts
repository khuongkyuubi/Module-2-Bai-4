export enum Role {
    ADMIN = 1,
    USER
}

export class User {
    private _name: string;
    private _email: string;
    private _role: Role;

    constructor(name: string,
                email: string,
                role: Role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get role(): Role {
        return this._role;
    }

    set role(value: Role) {
        this._role = value;
    }

    getInfo(): string {
        return `Name: ${this._name} \nEmail: ${this._email} \nRole: ${this._role}`;
    }

    isAdmin(): boolean {
        if (this._role === 1) {
            console.log("Admin")
            return true;
        }
        console.log("User");
        return false;
    }

}