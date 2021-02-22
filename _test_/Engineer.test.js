const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('King Arthur', '5678', 'king@king.com', 'KingArthur')
    
    expect(engineer.name).toBe('King Arthur');
    expect(engineer.id).toBe('5678');
    expect(engineer.email).toBe('king@king.com');
    expect(engineer.github).toBe('KingArthur');
});

test ("gets engineer's github username", () => {
    const engineer = new Engineer ('King Arthur', '5678', 'king@king.co', 'KingArthur')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('KingArthur'));
});

test("gets engineer's role", () => {
    const engineer = new Engineer ('King Arthur', '5678', 'king@king.co', 'KingArthur')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});