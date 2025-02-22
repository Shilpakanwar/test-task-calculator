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

test('Return handle new lines between numbers', () => {
    const result = Calculator.add('1\n2,3');
    expect(result).toBe(6);
});

test('should support custom delimiters', () => {
    const result = Calculator.add('//;\n1;2');
    expect(result).toBe(3);
});

test('should throw an exception for multiple negative numbers', () => {
    expect(() => Calculator.add('1,-2,-3')).toThrow('Negative numbers not allowed: -2, -3');
});
