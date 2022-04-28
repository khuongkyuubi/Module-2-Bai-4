import {Student} from "./Student";
export class StudentManager {
    students: Student[] = [];

    add(...student:Student[]) {
        // this.students = [...this.students ,...student];
        console.log(...student);
        this.students.push(...student);
    }

    showAll() {
        console.log(this.students);
    }

    updateScore(student: Student, score: number) {
        student.score = score;
    }

    statistical(): string {
        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        this.students.forEach((student) => {
            if (student.score < 6) {
                count1++;
            } else if (student.score > 8) {
                count3++;
            } else {
                count2++;
            }

        });
        return `Số học sinh dưới 6 điểm là: ${count1} \nSố học sinh từ 6 đến 8 là: ${count2} \nSố học sinh lớn hơn 8 điểm là : ${count3} `
    }
}