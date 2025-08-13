class OldPrinter {
  printOld(text) {
    console.log(`Impresión antigua: ${text}`);
  }
}

class AdapterPrinter {
  constructor(oldPrinter) {
    this.oldPrinter = oldPrinter;
  }
  print(text) {
    this.oldPrinter.printOld(text);
  }
}

const oldPrinter = new OldPrinter();
const adapter = new AdapterPrinter(oldPrinter);
adapter.print("Hola mundo"); // Impresión antigua: Hola mundo
