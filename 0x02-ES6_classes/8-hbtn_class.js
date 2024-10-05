class HolbertonClass {
  constructor(size, location) {
    // Verify that size is a number and location is a string
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }

    // Store attributes in underscore-prefixed variables
    this._size = size;
    this._location = location;
  }

  // Method to cast the class into a Number
  valueOf() {
    return this._size;
  }

  // Method to cast the class into a String
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
