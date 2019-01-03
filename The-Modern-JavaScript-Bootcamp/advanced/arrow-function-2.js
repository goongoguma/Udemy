// const add = function() {
//   // WE CAN ACCESS TO ARGUMENTS IN ORDER TO ACCESS ALL VARIABLES PASSED INTO FUNCTION
//   // arguments ONLY AVAILABLE FOR REGULAR FUNCTION NOT BOUND TO ARROW FUNCTION
//   console.log(arguments);
// };

// add(11, 22, 33, 44);

// WHEN WE CREATE METHOD, FUNCTIONS, OBJECT PROPERTIES, IT IS MUCH BETTER TO STICK WITH REGULAR FUNCTION. BECAUSE ARROW FUNCTION IS BAD CANDIDATE FOR THOSE
const car = {
  color: "Red",
  getSummary() {
    return `The car is ${this.color}`;
  }
};

console.log(car);
