const { expect } = require('@jest/globals');
const feast = require('./Kata');

test('hipopotamo con patata dará false', () => {
    expect(feast("hipopotamo", "patatata")).toBe(false);
});

test('pajaro con platano dará true', () => {
    expect(feast("pajaro", "platano")).toBe(true);
});
