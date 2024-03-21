const { createArray } = require('./lab1');

describe('createArray', () => {
  test('Should return an array', () => {
    expect(Array.isArray(createArray(3))).toBe(true);
  });

  test('Should return an array of specified length containing elements from 0 to length-1', () => {
    expect(createArray(2)).toEqual([0, 1]);
    expect(createArray(5)).toEqual([0, 1, 2, 3, 4]);
  });

  test('Should return an array that doesn\'t include the length value', () => {
    expect(createArray(3)).not.toContain(3);
    expect(createArray(5)).not.toContain(5);
  });
});
