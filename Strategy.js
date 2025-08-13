class StrategyA {
  execute() { console.log("Estrategia A"); }
}

class StrategyB {
  execute() { console.log("Estrategia B"); }
}

class Context2 {
  setStrategy(strategy) { this.strategy = strategy; }
  execute() { this.strategy.execute(); }
}

const ctx = new Context2();
ctx.setStrategy(new StrategyA());
ctx.execute();
ctx.setStrategy(new StrategyB());
ctx.execute();
