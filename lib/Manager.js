// this is importing the employee constructor
const Employee = require('./Employee');

// this Manager constructor will extend employee constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // this will override employee role to manager role
    getRole() {
        return 'Manager';
    }
}

// will be exported
module.exports = Manager;
