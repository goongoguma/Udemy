/*
// Object.create
var personProto = {
  calcualteAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John'
john.yearOfBirth =  1990;
john.job = 'teacher';


var jan = Object.create(personProto, 
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});

// The difference between 'function constructor' and 'Object.create' is that
// 'Object.create' builts an object inherited directly from one that we passed into the first argument.
// On the other hand, 'function constructor' newly creates an object inherited from function constructore prototype property.
// One of the biggest benefits of 'object.create' is that it allows to implement really complex inheritant structures
// in an easier way than 'function constructors' because it allows us to directly specify which object should be a prototype.
*/


// Primitives vs Objects
// Variables containg primitives actually hold that data inside of the variable itself.
// However a variables associated with objects do not acutall contain the object, 
// instead they contain a reference to the place in memory where the object sits, so where the object is stored.
// A variable declared as an object does not have a real copy of the object it just points to that object.


// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
// This example indicates that each of the variables acutally hold their own copy of the data. They do not reference anything.
// Therefore two variable holding things are really two different things.


// Objects
var obj1 = {
  name: 'John',
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
// All that we did was to create a new reference which ponits to the first object, so the object one and obejct two variables both hold a reference 
// that point to the exact same object in the memory, this is why when we change the age in object one, this change is also refelcted on object two
// because in fact it is the exact same object.

/*
// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a,b) {
  a = 30;
  b.city = 'san franscisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
// We pass the age variable holding a primitive and the object variable holding a reference to an object into 'function change'.
// The function then as it was invoked, attempted to change the arguments that we passed into it.
// So when we console.log the values we see the same thing as before, and that is the primitive has remained unchanged.
// But the city of the object has changed from Lisbon to san francisco.
// This shows us that when we pass a primitive into the function, a simple copy is created so we can change A as much as we want,
// it will never affect the variable on the outside because it is a primitive. but when we pass the object it is not really the object that we pass,
// but the reference to the object.
*/
