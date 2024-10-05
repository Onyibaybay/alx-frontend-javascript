class Building {
  constructor(sqft) {
    // Verify that sqft is a number
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    // Store the sqft attribute in an underscore-prefixed variable
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method to be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
