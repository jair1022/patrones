const carPrototype = {
  drive() { console.log(`Conduciendo un ${this.model}`); }
};

function createCar(model) {
  let car = Object.create(carPrototype);
  car.model = model;
  return car;
}

const carA = createCar("Toyota");
carA.drive(); // Conduciendo un Toyota
