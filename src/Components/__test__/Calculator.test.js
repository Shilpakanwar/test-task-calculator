import Calculator from '../Calculator';

test('Return 0 for empty string', () => {
    const result = Calculator.add('');
    expect(result).toBe(0);
});

test('Return the number when single number is passed', () => {
    const result = Calculator.add('1');
    expect(result).toBe(1);
});

test('Return the sum of two numbers separated by comma', () => {
    const result = Calculator.add('1,5');
    expect(result).toBe(6);
  });