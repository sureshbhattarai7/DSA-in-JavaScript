class Student{
    constructor(firstName, lastName, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.absent = 0;
        this.scores = [];
    };
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}!`;
    }
    isAbsent() {
        this.absent += 1;
        if (this.absent > 3) {
            return `${this.firstName} ${this.lastName} is EXPELLED for 1 week!`
        }
        return `${this.firstName} ${this.lastName} is absent ${this.absent} times!`
    };
    addScores(score) {
        this.scores.push(score);
        return this.scores;
    }
};


let firstStudent = new Student('Suresh', 'Bhattarai', 15);
console.log(firstStudent.firstName);

console.log(firstStudent.fullName());
console.log(firstStudent.isAbsent());
console.log(firstStudent.addScores(92));
console.log(firstStudent.addScores(88));
console.log(firstStudent.addScores(79));