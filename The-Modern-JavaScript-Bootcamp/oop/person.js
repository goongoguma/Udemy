// Prototypal Inheritance

const Person = function(firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

// IN ES6, IT USES this VALUE THAT PARENT HAS
Person.prototype.getBio = function() {
  let bio = `${this.firstName} is ${this.age}.`;

  this.likes.forEach(like => {
    // this IS USING THE VALUE IN THE VALUE THAT ITS PARENT HAS
    // IF WE WANT TO USE this IN CALLBACK FUNCTION, USE ARROW FUNCTION
    bio += ` ${this.firstName} likes ${like}.`;
  });

  return bio;
};

Person.prototype.setName = function(fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};

// CONSTRUCTOR FUNCTION new Person()
const me = new Person("Jay", "Hyun", 28, ["teaching", "biking"]);
me.firstName = "Jen";

me.setName("Alexis Turner");
console.log(me.getBio());

const person2 = new Person("Clancey", "Turner", 51);

console.log(person2.getBio());
