export class Instructor {
    name: string;
    role: string;

    //@ts-ignore
    constructor({name, role = "assistant"} = {}) {
        this.name = name;
        this.role = role;
    }

    //Instance method
    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }

    // Base case static method
    static helloWorld() {
        console.log("Hi there");
    }

    // Static method
    static canTeach(instructor: Instructor) {
        return (instructor.role === "classroom")
    }
}