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