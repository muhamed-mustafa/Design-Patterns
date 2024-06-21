interface State {
  change(light: TrafficLight): void;
  getState(): string;
}

class RedState implements State {
  public change(light: TrafficLight): void {
    light.setState(new GreenState());
  }

  public getState(): string {
    return "Red";
  }
}

class GreenState implements State {
  public change(light: TrafficLight): void {
    light.setState(new YellowState());
  }

  public getState(): string {
    return "Green";
  }
}

class YellowState implements State {
  public change(light: TrafficLight): void {
    light.setState(new RedState());
  }

  public getState(): string {
    return "Yellow";
  }
}

class TrafficLight {
  private state: State;

  constructor() {
    this.state = new RedState();
  }

  setState(state: State): void {
    this.state = state;
  }

  change(): void {
    this.state.change(this);
  }

  getState(): string {
    return this.state.getState();
  }
}

const light = new TrafficLight();
console.log(light.getState()); // red
light.change();
console.log(light.getState()); // green
light.change();
console.log(light.getState()); // yellow
light.change();
console.log(light.getState()); // red
