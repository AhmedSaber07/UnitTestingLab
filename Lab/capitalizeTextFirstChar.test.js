const { capitalizeTextFirstChar } = require('./lab1');

describe('capitalizeTextFirstChar', () => {
  test('Should return a string if the parameter is a string', () => {
    expect(typeof capitalizeTextFirstChar('test')).toBe('string');
  });

  test('Should return the string after capitalizing every word\'s first character', () => {
    expect(capitalizeTextFirstChar("i'm ahmed ali")).toBe("I'm Ahmed Ali");
  });

  test('Should throw a type error if the parameter is not a string', () => {
    expect(() => capitalizeTextFirstChar(12)).toThrow('Parameter should be a string');
  });
});
