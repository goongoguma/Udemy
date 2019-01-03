const Person = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

// CONSTRUCTOR FUNCTION new Person()
const me = new Person("Jay", "Hyun", 28);
me.firstName = "Jen";
console.log(me);

const person2 = new Person("Clancey", "Turner", 51);
console.log(person2);
