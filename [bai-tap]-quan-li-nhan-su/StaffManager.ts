import {Staff} from "./Staff";

export class StaffManager {
    static staffs: Staff[] = [];

    constructor() {
    }

    showList(): void {
        //@ts-ignore
        console.log("Last Name".padEnd(10), "First Name".padEnd(15), "Birthday".padEnd(20), "Address".padEnd(15), "Poisition".padEnd(25));
        StaffManager.staffs.forEach((staff) => {
            //@ts-ignore
            let {_lastName: lastName, _firstName: firstName, _dob: dob, _address: address, _position: position} = staff;
            //@ts-ignore
            console.log(`${lastName}`.padEnd(10), `${firstName}`.padEnd(15), `${dob}`.padEnd(20), `${staff.address}`.padEnd(15), `${position}`.padEnd(25));

        })

    }

    addStaff(...staff: Staff[]): void {
        StaffManager.staffs.push(...staff);
    }

    removeStaff(index: number): void {
        StaffManager.staffs.splice(index, 1);
    }

    // Destructuring default value
    editStaffInfo(index: number, {
        lastName = StaffManager.staffs[index].lastName,
        firstName = StaffManager.staffs[index].firstName,
        dob = new Date(StaffManager.staffs[index].dob),
        address = StaffManager.staffs[index].address,
        position = StaffManager.staffs[index].position,
    } = {}): void {
        StaffManager.staffs[index].lastName = lastName;
        StaffManager.staffs[index].firstName = firstName;
        StaffManager.staffs[index].dob = dob;
        StaffManager.staffs[index].address = address;
        StaffManager.staffs[index].position = position;
    }
}