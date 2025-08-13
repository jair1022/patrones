class Computer {
  constructor() {
    this.parts = [];
  }
  addPart(part) {
    this.parts.push(part);
  }
}

class ComputerBuilder {
  constructor() {
    this.computer = new Computer();
  }
  addCPU(cpu) {
    this.computer.addPart(cpu);
    return this;
  }
  addRAM(ram) {
    this.computer.addPart(ram);
    return this;
  }
  build() {
    return this.computer;
  }
}

const pc = new ComputerBuilder()
  .addCPU("Intel i9")
  .addRAM("32GB")
  .build();

console.log(pc.parts); // [ 'Intel i9', '32GB' ]
