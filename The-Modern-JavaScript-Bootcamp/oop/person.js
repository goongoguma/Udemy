// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach(like => {
      // this IS USING THE VALUE IN THE VALUE THAT ITS PARENT HAS
      // IF WE WANT TO USE this IN CALLBACK FUNCTION, USE ARROW FUNCTION
      bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
  }
  setName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}.`;
    // Jae is a teacher
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}

// const me = new Employee("Jay", "Hyun", 28, "teacher", ["teaching", "biking"]);

// me.setName("Alexis Turner");
// console.log(me.getBio());
// console.log(me.getYearsLeft());

// const person2 = new Person("Clancey", "Turner", 51);
// console.log(person2.getBio());

class Student extends Person {
  constructor(firstName, grade) {
    super(firstName);
    this.grade = grade;
  }
  upgradeGrade(change) {
    this.grade += change;
    return this.grade;
  }
  gradeResult() {
    if (this.grade >= 70) {
      return `${this.firstName} is passing the class`;
    } else {
      return `${this.firstName} is not passing the calss`;
    }
  }
}

const me = new Student("Jae", 85);
console.log(me.upgradeGrade(10));
console.log(me.gradeResult());
