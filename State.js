class State {
  handle() {}
}

class OnState extends State {
  handle() { console.log("Encendido"); }
}

class OffState extends State {
  handle() { console.log("Apagado"); }
}

class Context {
  setState(state) { this.state = state; }
  request() { this.state.handle(); }
}

const context = new Context();
context.setState(new OnState());
context.request();
context.setState(new OffState());
context.request();
