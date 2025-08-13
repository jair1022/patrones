class Device {
  turnOn() {}
}

class TV extends Device {
  turnOn() {
    console.log("TV encendida");
  }
}

class Remote {
  constructor(device) {
    this.device = device;
  }
  pressPower() {
    this.device.turnOn();
  }
}

const tv = new TV();
const remote = new Remote(tv);
remote.pressPower(); // TV encendida
