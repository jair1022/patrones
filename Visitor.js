class Element {
  accept(visitor) {}
}

class ConcreteElement extends Element {
  accept(visitor) {
    visitor.visit(this);
  }
}

class Visitor {
  visit(element) {
    console.log("Visitando elemento");
  }
}

const element = new ConcreteElement();
const visitor = new Visitor();
element.accept(visitor);
