import Calculator from '../Calculator';

test('Return 0 for empty string', () => {
  const result = Calculator.add('');
  expect(result).toBe(0);
});