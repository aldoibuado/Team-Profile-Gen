const Intern = require('../lib/Intern');

test("intern", () => {
    const school = "Union College";
    const employee = new Intern("Aldo", 30, "aldo.ibuado@gmail.com", school);
  
    expect(employee.school).toBe(school);
  });
  
  test("testing to see if getSchool method works", () => {
    const school1 = "Union College";
    const employee = new Intern("Aldo", 30, "aldo.ibuado@gmail.com", school1);
  
    expect(employee.getSchool()).toBe(school1);
  });

  test("testing to see if getRole method works", () => {
    const role = "Intern";
    const employee = new Intern("Aldo", 30, "aldo.ibuado@gmail.com", 'Union College');
  
    expect(employee.getRole()).toBe(role);
  });