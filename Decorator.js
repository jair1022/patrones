class Coffee {
  cost() { return 5; }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 2;
  }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
console.log(coffee.cost()); // 7
