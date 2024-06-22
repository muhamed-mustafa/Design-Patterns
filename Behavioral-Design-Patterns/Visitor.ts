interface Visitor {
  visitBook(book: Book): void;
  visitElectronics(electronics: Electronics): void;
}

interface Product {
  accept(visitor: Visitor): void;
}

class Book implements Product {
  constructor(public title: string, public price: number) {}

  accept(visitor: Visitor): void {
    visitor.visitBook(this);
  }
}

class Electronics implements Product {
  constructor(public name: string, public price: number) {}

  accept(visitor: Visitor): void {
    visitor.visitElectronics(this);
  }
}

class ShippingCostVisitor implements Visitor {
  visitBook(book: Book): void {
    const cost = book.price * 0.05; // 5% of book price
    console.log(`Shipping cost for book "${book.title}": $${cost.toFixed(2)}`);
  }

  visitElectronics(electronics: Electronics): void {
    const cost = electronics.price * 0.1; // 10% of electronics price
    console.log(
      `Shipping cost for electronics "${electronics.name}": $${cost.toFixed(2)}`
    );
  }
}

class DiscountVisitor implements Visitor {
  visitBook(book: Book): void {
    const discount = book.price * 0.1; // 10% discount
    console.log(`Discount for book "${book.title}": $${discount.toFixed(2)}`);
  }

  visitElectronics(electronics: Electronics): void {
    const discount = electronics.price * 0.15; // 15% discount
    console.log(
      `Discount for electronics "${electronics.name}": $${discount.toFixed(2)}`
    );
  }
}

const products = [
  new Book("The TypeScript Handbook", 25.0),
  new Electronics("Smartphone", 500.0),
];

const shippingCostVisitor = new ShippingCostVisitor();
const discountVisitor = new DiscountVisitor();

for (const product of products) {
  product.accept(shippingCostVisitor);
}

for (const product of products) {
  product.accept(discountVisitor);
}
