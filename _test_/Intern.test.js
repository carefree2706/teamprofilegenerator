const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('Green', '0001', 'green@green.com', 'College');
    expect(intern.name).toBe('Green');
    expect(intern.id).toBe('0001');
    expect(intern.email).toBe('green@green.com');
    expect(intern.school).toBe('College');
});

test("gets intern's school", () => {
    const intern = new Intern('Green', '0001', 'green@green.com', 'College');
    expect(intern.getSchool()).toEqual(expect.stringContaining('College'));
});

test("gets intern's role", () => {
    const intern = new Intern('Green', '0001', 'green@green.com', 'College');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});