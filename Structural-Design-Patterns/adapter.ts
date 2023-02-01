// another example of adapter pattern

interface IPhone {
  useLightning(): void;
}

interface Android {
  useMicroUSB(): void;
}

class iphone13 implements IPhone {
  useLightning() {
    console.log('Using lightning port..');
  }
}

class Nokia implements Android {
  useMicroUSB() {
    console.log('Using micro USB...');
  }
}

class LightningToMicroUSBAdapter implements Android {
  iphoneDevice: IPhone;

  constructor(iphone: IPhone) {
    this.iphoneDevice = iphone;
  }

  useMicroUSB(): void {
    console.log('Want to use micro USB, converting...');
    this.iphoneDevice.useLightning();
  }
}

let iphone = new iphone13();
let chargeAdaptor = new LightningToMicroUSBAdapter(iphone);
chargeAdaptor.useMicroUSB();
