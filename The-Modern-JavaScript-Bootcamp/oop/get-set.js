// getter and setter allow us to customize the behavior of an object
const data = {
  locations: [],
  // get method allows us to override what happens when someone tries to fetch value
  get location() {
    return this._location;
  },
  // get method gets call with the value that user tries to set
  set location(value) {
    this._location = value.trim();
    this.locations.push(this._location);
  }
};

// code that uses the data object
data.location = "Incheon    ";
data.location = " New York";
console.log(data);
