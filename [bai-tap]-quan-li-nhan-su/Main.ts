import {Staff} from "./Staff";
import {StaffManager} from "./StaffManager";

let staff1 = new Staff("Phạm", "An", new Date("2000,10,25"), "Hải Dương", "Giám đốc");
let staff2 = new Staff("Lê", "Thịnh", new Date("2000,9,20"), "Hà Nam", "Chủ tịch HĐQT");
let staff3 = new Staff("Lê", "Thành", new Date("2000,8,22"), "Hải Dương", "Tổng Giám đốc");

let staffManager = new StaffManager();

staffManager.addStaff(staff1, staff2, staff3);

staffManager.editStaffInfo(0, {firstName: "Khương", lastName: "Lê", address: "Hà Nội"});

staffManager.showList();
