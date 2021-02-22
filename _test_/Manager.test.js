const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Takashi', '5678', 'Takashi@taka.com', 'T123');
    
    expect(manager.name).toBe('Takashi');
    expect(manager.id).toBe('5678');
    expect(manager.email).toBe('Takashi@taka.com');
    expect(manager.office).toBe('T123');
});

test("gets employee's role", () => {
    const manager = new Manager('Takashi', '1234', 'Takashi@taka.com', 'T123');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});