// this is importing the employee constructor
const Employee = require('./Employee');

// this engineer constructor will extend the employee constructor 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // will override employee and return engineer
    getRole() {
        return 'Engineer';
    }
}

// will be exported
module.exports = Engineer;