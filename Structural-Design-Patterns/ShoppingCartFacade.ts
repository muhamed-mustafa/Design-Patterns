class ProductCatalog {
  getProductDetails(id: number) {
    return { id, name: `Product  ${id}`, price: 100 };
  }
}

class InventorySystem {
  checkStock(productId: number) {
    return true;
  }
}

class PaymentGateway {
  processPayment(amount: number) {
    console.log(`Payment of $${amount} processed successfully.`);
    return true;
  }
}

class ShippingService {
  arrangeShipping(productId: number) {
    console.log(`Product ${productId} shipped successfully.`);
  }
}

class ShoppingCartFacade {
  private productCatalog: ProductCatalog;
  private inventorySystem: InventorySystem;
  private paymentGateway: PaymentGateway;
  private shippingService: ShippingService;
  private cart: { productId: number; quantity: number }[] = [];

  constructor() {
    this.productCatalog = new ProductCatalog();
    this.inventorySystem = new InventorySystem();
    this.paymentGateway = new PaymentGateway();
    this.shippingService = new ShippingService();
  }

  private addToCart(productId: number, quantity: number) {
    if (!this.inventorySystem.checkStock(productId)) {
      console.log(`Product ${productId} is out of stock.`);
      return;
    }

    this.cart.push({ productId, quantity });
    console.log(`Product ${productId} added to cart.`);
  }

  private checkout() {
    if (this.cart.length === 0) {
      console.log("Cart is empty. Nothing to checkout.");
      return;
    }

    let totalAmount = 0;
    this.cart.forEach((item) => {
      const product = this.productCatalog.getProductDetails(item.productId);
      totalAmount += product.price * item.quantity;
    });

    if (!this.paymentGateway.processPayment(totalAmount)) {
      console.log("Payment failed. Checkout cancelled.");
      return;
    }

    this.cart.forEach((item) => {
      this.shippingService.arrangeShipping(item.productId);
    });

    this.cart = [];
    console.log("Checkout successful.");
  }

  purchaseOrder(productId: number, quantity: number) {
    this.addToCart(productId, quantity);
    this.checkout();
  }
}

const shoppingCart = new ShoppingCartFacade();

shoppingCart.purchaseOrder(1, 2);
