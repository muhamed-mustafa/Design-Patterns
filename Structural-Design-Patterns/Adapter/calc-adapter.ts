import Calculator from './calc-v2';

export class CalculatorAdapter {
  calculator: Calculator;

  constructor() {
    this.calculator = new Calculator();
  }

  operation(num1: number, num2: number, operation: string): number {
    switch (operation) {
      case 'add':
        return this.calculator.add(num1, num2);

      case 'multiplication':
        return this.calculator.multiplication(num1, num2);

      case 'division':
        return this.calculator.division(num1, num2);

      case 'Subtract':
        return this.calculator.subtract(num1, num2);

      default:
        return NaN;
    }
  }
}
