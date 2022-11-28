const Employee = require("../lib/Employee");

test('create employee object', () => {
    const employee = new Employee('Aldo', 30, 'aldo.ibuado@gmail.com');

    expect(typeof(employee)).toBe('object')
})

test('name', () => {
    const name = 'Aldo'
    const employee = new Employee(name)

    expect(employee.name).toBe(name);
})

test('id', () => {
    const id = 30
    const employee = new Employee('Aldo', id)

    expect(employee.id).toBe(id);
})

test('email', () => {
    const email = 'aldo.ibuado@gmail.com'
    const employee = new Employee('Aldo', 30, email)

    expect(employee.email).toBe(email);
})

test('testing if getName method works', () => {
    const name1 = 'Aldo'
    const employee = new Employee(name1)

    expect(employee.getName()).toBe(name1);
})

test('testing if getId method works', () => {
    const id1 = 30
    const employee = new Employee('Aldo',id1)

    expect(employee.getId()).toBe(id1);
})

test('testing if getEmail method works', () => {
    const email1 = 'aldo.ibuado@gmail.com'
    const employee = new Employee('Aldo', 30, email1)

    expect(employee.getEmail()).toBe(email1);
})

test('testing if getRole method works', () => {
    const role = 'Employee'
    const employee = new Employee('Aldo', 30, 'aldo.ibuado@gmail.com')

    expect(employee.getRole()).toBe(role);
})

