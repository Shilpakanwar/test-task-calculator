const Calculator = {
    add: (numbers) => {
        if (numbers === '') return 0;
        const Input = numbers.replace(/\n/g, ',');
        return Input.split(',').reduce((sum, num) => sum + parseInt(num, 10), 0);
      }
    };
  
  export default Calculator;