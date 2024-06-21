interface PaymentStrategy {
  processPayment(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of ${amount}`);
  }
}

class PaypalPayment implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of ${amount}`);
  }
}

class BankTransferPayment implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log(`Processing bank transfer payment of ${amount}`);
  }
}

class PaymentProcessor {
  constructor(private strategy: PaymentStrategy) {}

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  processPayment(amount: number) {
    this.strategy.processPayment(amount);
  }
}

const creditCardPayment = new CreditCardPayment();
const paypalPayment = new PaypalPayment();
const bankTransferPayment = new BankTransferPayment();

const paymentProcessor = new PaymentProcessor(creditCardPayment);

paymentProcessor.processPayment(100); // Processing credit card payment of 100

paymentProcessor.setStrategy(paypalPayment);
paymentProcessor.processPayment(200); // Processing PayPal payment of 200

paymentProcessor.setStrategy(bankTransferPayment);
paymentProcessor.processPayment(300); // Processing bank transfer payment of 300
