export enum Role {
    ADMIN = 1,
    USER
}

export class User {
    protected name: string;
    protected email: string;
    public role: Role;

    constructor(name: string,
                email: string,
                role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    getInfo(): string {
        return `Name: ${this.name} \nEmail: ${this.email} \nRole: ${this.role}`;
    }

    isAdmin(): boolean {
        if (this.role === 1) {
            console.log("Admin")
            return true;
        }
        console.log("User");
        return false;
    }

}