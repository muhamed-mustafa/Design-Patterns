interface Mediator {
  notify(sender: Object, event: string): void;
}

class ConcreteMediator implements Mediator {
  private componentA: ComponentA;
  private componentB: ComponentB;

  constructor(cA: ComponentA, cB: ComponentB) {
    this.componentA = cA;
    this.componentA.setMediator(this);

    this.componentB = cB;
    this.componentB.setMediator(this);
  }

  notify(_sender: Object, event: string): void {
    if (event === "A") {
      console.log("Mediator reacts on A and triggers B:");
      this.componentB.doC();
    }

    if (event === "B") {
      console.log("Mediator reacts on B and triggers A:");
      this.componentA.doD();
    }
  }
}

class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator?: Mediator) {
    this.mediator = mediator!;
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

class ComponentA extends BaseComponent {
  doA(): void {
    console.log("Component A does A.");
    this.mediator.notify(this, "A");
  }

  doD(): void {
    console.log("Component A does D.");
  }
}

class ComponentB extends BaseComponent {
  doB(): void {
    console.log("Component B does B.");
    this.mediator.notify(this, "B");
  }

  doC(): void {
    console.log("Component B does C.");
  }
}

const componentA = new ComponentA();
const componentB = new ComponentB();
const mediator = new ConcreteMediator(componentA, componentB);

console.log("Client triggers operation A.");
componentA.doA();

console.log("");

console.log("Client triggers operation B.");
componentB.doB();
