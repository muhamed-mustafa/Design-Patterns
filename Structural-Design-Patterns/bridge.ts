interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
}

class RemoteControl {
  constructor(protected device: Device) {}

  togglePower(): void {
    this.device.isEnabled() ? this.device.disable() : this.device.enable();
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }
}

class TV implements Device {
  private on: boolean = false;
  private volume: number = 50;

  isEnabled(): boolean {
    return this.on;
  }

  enable(): void {
    this.on = true;
  }

  disable(): void {
    this.on = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    this.volume = percent;
  }
}

class Radio implements Device {
  private on: boolean = false;
  private volume: number = 30;

  isEnabled(): boolean {
    return this.on;
  }

  enable(): void {
    this.on = true;
  }

  disable(): void {
    this.on = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    this.volume = percent;
  }
}

class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    this.device.setVolume(0);
  }
}

const tv = new TV();
const radio = new Radio();

const remote = new RemoteControl(tv);
remote.togglePower(); // Turns the TV on or off
remote.volumeUp(); // Increases the TV volume

const advancedRemote = new AdvancedRemoteControl(radio);
advancedRemote.togglePower(); // Turns the Radio on or off
advancedRemote.mute(); // Mutes the Radio
