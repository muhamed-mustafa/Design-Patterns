interface MyIterator<T> {
  current(): T;
  next(): T;
  valid(): boolean;
  rewind(): void;
}

interface Aggregate<T> {
  getIterator(): MyIterator<T>;
}

class ConcreteIterator implements MyIterator<number> {
  private position: number = 0;

  constructor(private collection: ConcreteAggregate) {}

  public current(): number {
    return this.collection.getItems()[this.position];
  }

  public next(): number {
    const item = this.collection.getItems()[this.position];
    this.position += 1;
    return item;
  }

  public valid(): boolean {
    return this.position < this.collection.getCount();
  }

  public rewind(): void {
    this.position = 0;
  }
}

class ConcreteAggregate implements Aggregate<number> {
  private items: number[] = [];

  public getItems(): number[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: number): void {
    this.items.push(item);
  }

  public getIterator(): MyIterator<number> {
    return new ConcreteIterator(this);
  }
}

const collection = new ConcreteAggregate();
collection.addItem(1);
collection.addItem(2);
collection.addItem(3);
collection.addItem(4);

const iterator = collection.getIterator();

console.log("Iterating over collection:");
while (iterator.valid()) {
  console.log(iterator.next());
}
