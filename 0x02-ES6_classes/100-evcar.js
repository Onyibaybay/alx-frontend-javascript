import Car from './10-car';

const _range = Symbol('range');

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class constructor
    super(brand, motor, color);

    // Verify that range is a string
    if (typeof range !== 'string') {
      throw new TypeError('range must be a string');
    }

    // Store range attribute in a symbol-prefixed variable
    this[_range] = range;
  }

  // Override the cloneCar method to return a Car instance
  cloneCar() {
    return new Car(this.brand, this.motor, this.color);
  }

  // Getter for the range attribute
  get range() {
    return this[_range];
  }
}

export default EVCar;
