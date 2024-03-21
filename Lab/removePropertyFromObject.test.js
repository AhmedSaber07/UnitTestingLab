const { removePropertyFromObject } = require('./Bonus');

describe('removePropertyFromObject', () => {
  test('Should throw an error if the property/key is not defined in the object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const propertyName = 'd';
    expect(() => removePropertyFromObject(obj, propertyName)).toThrow('Property/key is not defined in the object');
  });

  test('Should return the type of object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const propertyName = 'b';
    expect(typeof removePropertyFromObject(obj, propertyName)).toBe('object');
  });

  test('Should return the object without the specified property/key', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const propertyName = 'b';
    expect(removePropertyFromObject(obj, propertyName)).toEqual({ a: 1, c: 3 });
  });
});
