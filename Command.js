class Light {
  on() { console.log("Luz encendida"); }
  off() { console.log("Luz apagada"); }
}

class LightOnCommand {
  constructor(light) { this.light = light; }
  execute() { this.light.on(); }
}

class LightOffCommand {
  constructor(light) { this.light = light; }
  execute() { this.light.off(); }
}

const light = new Light();
const onCommand = new LightOnCommand(light);
const offCommand = new LightOffCommand(light);

onCommand.execute();
offCommand.execute();
