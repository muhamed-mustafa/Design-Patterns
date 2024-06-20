class Memento {
  constructor(private state: string) {}

  public getState(): string {
    return this.state;
  }
}

class Originator {
  private state: string;

  constructor() {
    this.state = "";
  }

  public getState(): string {
    return this.state;
  }

  public setState(state: string): void {
    this.state = state;
    console.log(`Originator: Setting state to ${state}`);
  }

  public saveStateToMemento(): Memento {
    console.log("Originator: Saving to Memento.");
    return new Memento(this.state);
  }

  public getStateFromMemento(memento: Memento): void {
    this.state = memento.getState();
    console.log(
      `Originator: State after restoring from Memento: ${this.state}`
    );
  }
}

class Caretaker {
  private mementos: Memento[] = [];

  public add(memento: Memento): void {
    this.mementos.push(memento);
  }

  public getMementos(): Memento[] {
    return this.mementos;
  }

  public get(index: number): Memento {
    return this.mementos[index];
  }
}

const originator = new Originator();
const caretaker = new Caretaker();

originator.setState("State #1");
originator.setState("State #2");
caretaker.add(originator.saveStateToMemento());

originator.setState("State #3");
caretaker.add(originator.saveStateToMemento());

originator.setState("State #4");

console.log(`Current State: ${originator.getState()}`);

originator.getStateFromMemento(caretaker.get(0));
console.log(`First saved State: ${originator.getState()}`);

originator.getStateFromMemento(caretaker.get(1));
console.log(`Second saved State: ${originator.getState()}`);
