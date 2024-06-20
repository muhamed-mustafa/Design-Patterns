interface Observer {
  update(stockSymbol: string, price: number): void;
}

interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notifyObservers(stockSymbol: string, price: number): void;
}

class StockMarket implements Subject {
  private observers: Observer[] = [];
  private stockPrices: { [key: string]: number } = {};

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(stockSymbol: string, price: number): void {
    this.observers.forEach((observer) => {
      observer.update(stockSymbol, price);
    });
  }

  setStockPrice(stockSymbol: string, price: number): void {
    this.stockPrices[stockSymbol] = price;
    this.notifyObservers(stockSymbol, price);
  }
}

class StockDisplay implements Observer {
  update(stockSymbol: string, price: number): void {
    console.log(`StockDisplay: ${stockSymbol} price updated to ${price}`);
  }
}

class StockLogger implements Observer {
  update(stockSymbol: string, price: number): void {
    console.log(`StockLogger: ${stockSymbol} price changed to ${price}`);
  }
}

// Create the stock market (subject)
const stockMarket = new StockMarket();

// Create observers
const stockDisplay = new StockDisplay();
const stockLogger = new StockLogger();

// Subscribe observers to the stock market
stockMarket.subscribe(stockDisplay);
stockMarket.subscribe(stockLogger);

// Simulate stock price updates
stockMarket.setStockPrice("AAPL", 150);
stockMarket.setStockPrice("GOOGL", 2800);

// Unsubscribe an observer
stockMarket.unsubscribe(stockDisplay);

// Simulate more stock price updates
stockMarket.setStockPrice("AAPL", 155);
stockMarket.setStockPrice("GOOGL", 2850);
