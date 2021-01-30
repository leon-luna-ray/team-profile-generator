const Employee = require('./employee.js');

// There appears to be a bug around extends Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    getSchool() {return this.school};
    getRole() {return 'Intern'};
};

module.exports = Intern;