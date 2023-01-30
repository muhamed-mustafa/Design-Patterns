export default class Calculator {
  operation(num1: number, num2: number, operation: string): number {
    switch (operation) {
      case 'add':
        return num1 + num2;

      case 'multiplication':
        return num1 * num2;

      case 'division':
        return num1 / num2;

      case 'Subtract':
        return num1 - num2;

      default:
        return NaN;
    }
  }
}
