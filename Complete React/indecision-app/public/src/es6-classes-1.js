// // Setup constructor to take name and age (default to 0)
// // getDescription - 'Jay An(Anonymous) is 27 year(s) old.'
// class Person {
//   constructor(name = 'Anonymous', age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   getGreeting() {
//     return `Hi, I am ${this.name}.`;
//   }
//   getDescription() {
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// }

// class Student extends Person {
//   constructor(name, age, major) {
//     super(name, age); // super() indicates perant constructor function
//     this.major = major;
//   }
//   hasMajor() {
//     return !!this.major;
//   }
//   getDescription() { // overrides parent getDescription()
//     let description = super.getDescription(); 

//     if (this.hasMajor()) {
//       description += ` Their major is ${this.major}.`;
//     }

//     return description;
//   }
// };

// // Traveler -> (extend) Person
// // Add support for homeLocation
// // Override getGreeting
// // 1. Hi. I am Andrew Mead. I am visiting from Phili.
// // 2. Hi. I am Andrew Mead 


// class Traveler extends Person {
//   constructor(name, age, homeLocation){
//     super(name, age);
//     this.homeLocation = homeLocation;
//   }
//   getGreeting() {
//     let desc = super.getGreeting();
    
//     if(this.homeLocation) {
//       desc = desc + `I am visiting from ${this.homeLocation}.`
//     } return desc;
//   }
// }

// const me = new Traveler('Jay An', 27, 'Incheon');
// console.log(me.getGreeting());

// const other = new Traveler();
// console.log(other.getGreeting());


