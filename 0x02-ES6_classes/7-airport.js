class Airport {
  constructor(name, code) {
    // Verify that name and code are strings
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }

    // Store attributes in underscore-prefixed variables
    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Default string description of the class
  toString() {
    return this._code;
  }
}

export default Airport;
