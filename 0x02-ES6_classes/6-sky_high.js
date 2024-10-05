import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Assign sqft to the parent class
    // Verify that floors is a number
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }

    // Store attributes in underscore-prefixed variables
    this._floors = floors;
  }

  // Getter for sqft (inherited from Building)
  get sqft() {
    return super.sqft; // Calls the getter from the Building class
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

export default SkyHighBuilding;
