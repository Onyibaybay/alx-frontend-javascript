// Create unique symbols for each attribute
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    // Verify that inputs are of the correct type
    if (typeof brand !== 'string') {
      throw new TypeError('brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new TypeError('color must be a string');
    }

    // Store attributes in symbol-prefixed variables
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  // Method to clone the car
  cloneCar() {
    return new Car(this[_brand], this[_motor], this[_color]);
  }

  // Getters for each attribute
  get brand() {
    return this[_brand];
  }

  get motor() {
    return this[_motor];
  }

  get color() {
    return this[_color];
  }
}

export default Car;
