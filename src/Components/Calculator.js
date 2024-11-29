const Calculator = {
    add: (numbers) => {
        if (numbers === '') return 0;

        let delimiter = ',';
        if (numbers.startsWith('//')) {
            delimiter = numbers[2];
            numbers = numbers.slice(4);
        }

        const input = numbers.replace(new RegExp(`\\${delimiter}|\\n`, 'g'), ',');
        const numbersArray = numbers.split(',');
        const negativeNumbers = numbersArray.filter(num => parseInt(num, 10) < 0);

        if (negativeNumbers.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
        }

        return input.split(',').reduce((sum, num) => sum + parseInt(num, 10), 0);
    }
};

export default Calculator;