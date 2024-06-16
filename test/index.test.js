const { capitalizeText, reverseString } = require('../src/index');

test('capitalizes the first letter of string', () => {
  expect(capitalizeText('hello')).toBe('Hello');
});

test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
