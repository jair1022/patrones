class CPU {
  start() { console.log("CPU iniciada"); }
}
class Memory {
  load() { console.log("Memoria cargada"); }
}
class Disk {
  read() { console.log("Disco leído"); }
}

class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.disk = new Disk();
  }
  start() {
    this.cpu.start();
    this.memory.load();
    this.disk.read();
  }
}

const pc = new ComputerFacade();
pc.start();
