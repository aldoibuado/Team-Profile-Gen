const Engineer = require('../lib/Engineer');

test('github', () => {
    const github = 'aldoibuado'
    const employee = new Engineer('Aldo', 30, 'aldo.ibuado@gmail.com', github)

    expect(employee.github).toBe(github);
});

test('testing to see if getGithub method works', () => {
    const github1 = 'aldoibuado'
    const employee = new Engineer('Aldo', 30, 'aldo.ibuado@gmail.com', github1)

    expect(employee.getGithub()).toBe(github1);
});

test('testing to see if getRole method works', () => {
    const role = 'Engineer'
    const employee = new Engineer('Aldo', 30, 'aldo.ibuado@gmail.com')

    expect(employee.getRole()).toBe(role);
});