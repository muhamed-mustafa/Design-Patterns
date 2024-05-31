interface PizzaComponent {
  getDescription(): string;
  getCost(): number;
}

class BasicPizza implements PizzaComponent {
  getDescription(): string {
    return "Basic Pizza";
  }

  getCost(): number {
    return 10;
  }
}

class ShrimpComponent implements PizzaComponent {
  constructor(private pizzaComponent: PizzaComponent) {}

  getDescription(): string {
    return this.pizzaComponent.getDescription() + ", shrimp";
  }

  getCost(): number {
    return this.pizzaComponent.getCost() + 2;
  }
}

class StripsComponent implements PizzaComponent {
  constructor(private pizzaComponent: PizzaComponent) {}

  getDescription(): string {
    return this.pizzaComponent.getDescription() + ", strips";
  }

  getCost(): number {
    return this.pizzaComponent.getCost() + 4;
  }
}

const customPizza = new StripsComponent(new ShrimpComponent(new BasicPizza()));

console.log(customPizza.getDescription());
console.log(customPizza.getCost());
