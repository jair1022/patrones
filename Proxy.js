class RealImage {
  constructor(fileName) {
    this.fileName = fileName;
    this.loadFromDisk();
  }
  loadFromDisk() {
    console.log(`Cargando ${this.fileName} desde disco...`);
  }
  display() {
    console.log(`Mostrando ${this.fileName}`);
  }
}

class ProxyImage {
  constructor(fileName) {
    this.fileName = fileName;
    this.realImage = null;
  }
  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.fileName);
    }
    this.realImage.display();
  }
}

const img = new ProxyImage("foto.jpg");
img.display(); // Carga y muestra
img.display(); // Solo muestra
