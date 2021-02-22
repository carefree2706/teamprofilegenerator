const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Brian', '1234', 'Brian@brian.com');

    expect(employee.name).toBe('Brian');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('Brian@brian.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Brian', '1234', 'Brian@brian.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Brian'));
});

test("gets employee's ID", () => {
    const employee = new Employee('Brian', '1234', 'Brian@brian.com');

    expect(employee.getId()).toEqual(expect.stringContaining('1234'));
});

test("gets employee's email", () => {
    const employee = new Employee('Brian', '1234', 'Brian@brian.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('Brian@brian.com'));
});

test("gets employee's role", () => {
    const employee = new Employee('Brian', '1234', 'Brian@brian.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});