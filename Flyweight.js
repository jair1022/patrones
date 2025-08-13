class Car {
  constructor(model) {
    this.model = model;
  }
}

const carFactory = (() => {
  const cars = {};
  return {
    getCar: (model) => {
      if (!cars[model]) {
        cars[model] = new Car(model);
      }
      return cars[model];
    }
  };
})();

const carA = carFactory.getCar("Sedan");
const carB = carFactory.getCar("Sedan");
console.log(carA === carB); // true
