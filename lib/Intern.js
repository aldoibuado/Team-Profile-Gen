// importing employee constructor
const Employee = require('./Employee');

// this intern constructor will extend the employee constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }

    getSchool() {
        return this.school;
    }
 
    // will override employee and return intern role
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;