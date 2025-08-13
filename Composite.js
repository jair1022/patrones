class File {
  constructor(name) {
    this.name = name;
  }
  display() {
    console.log(this.name);
  }
}

class Folder {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  add(item) {
    this.children.push(item);
  }
  display() {
    console.log(`📂 ${this.name}`);
    this.children.forEach(child => child.display());
  }
}

const file1 = new File("archivo1.txt");
const file2 = new File("archivo2.txt");
const folder = new Folder("Documentos");
folder.add(file1);
folder.add(file2);
folder.display();
