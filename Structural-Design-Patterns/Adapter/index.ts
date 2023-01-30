import { CalculatorAdapter } from './calc-adapter';
import Calculator from './calc-v2';

const calculatorAd = new CalculatorAdapter();
console.log(calculatorAd.operation(1, 2, 'add'));

const calculator = new Calculator();
console.log(calculator.add(1, 2));
