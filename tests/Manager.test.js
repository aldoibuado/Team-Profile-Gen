const Manager = require("../lib/Manager");

test("officenumber", () => {
    const officeNumber = 2490;
    const employee = new Manager("Aldo", 30, "aldo.ibuado@gmail.com", officeNumber);
  
    expect(employee.officeNumber).toBe(officeNumber);
  });

test("testing to see if getRole method works", () => {
    const role = 'Manager';
    const employee = new Manager("Aldo", 30, "aldo.ibuado@gmail.com", 2490);
  
    expect(employee.getRole()).toBe(role);
});
 