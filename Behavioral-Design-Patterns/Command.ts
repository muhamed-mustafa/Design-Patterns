interface Command {
  execute(): void;
  undo(): void;
}

class Light {
  turnOn() {
    console.log("The light is on");
  }

  turnOff() {
    console.log("The light is off");
  }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn();
  }

  undo(): void {
    this.light.turnOff();
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOff();
  }

  undo(): void {
    this.light.turnOn();
  }
}

class RemoteControl {
  private command: Command;
  private history: Command[] = [];

  setCommand(command: Command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
    this.history.push(this.command);
  }

  pressUndo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

// Receiver
const livingRoomLight = new Light();

// Concrete Commands
const lightOnCommand = new LightOnCommand(livingRoomLight);
const lightOffCommand = new LightOffCommand(livingRoomLight);

// Invoker
const remoteControl = new RemoteControl();

// Turn the light on
remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton(); // Output: The light is on

// Turn the light off
remoteControl.setCommand(lightOffCommand);
remoteControl.pressButton(); // Output: The light is off

// Undo the last action (turn the light back on)
remoteControl.pressUndo(); // Output: The light is on

// Undo the previous action (turn the light off)
remoteControl.pressUndo(); // Output: The light is off
