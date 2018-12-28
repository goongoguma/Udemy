let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge area

// name, age, location

// print 'Jay is 29 and lives in Incheon'
// Increase age by 1 and print message again

let profile = {
  name: "Jay",
  age: 29,
  location: "Incheon"
};

console.log(
  `${profile.name} is ${profile.age} and lives in ${profile.location}`
);

profile.age = profile.age + 1;

console.log(
  `${profile.name} is ${profile.age} and lives in ${profile.location}`
);
