/////////////////////////////////////////////////////
// LECTURE : Maps
// In Maps, we can use anyting as keys which opens a lot of possibilities and it is iterable and we can easily manipulate data.
const question = new Map();
question.set('question','What is the official name of the lastest JavaScript version?'); // .set(key, value)
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

// retrieve the data from the map -> .get
console.log(question.get('question')); // What is the official name of the lastest JavaScript version?

// retrieve the size of the date from the map -> .size
console.log(question.size); // 8 

// remove the size of the data for the map 
if(question.has(4)) {   // if there is a key no.4 in the Map, delete it.
  question.delete(4);
}

// remove all data from the map
question.clear(); // Map {}


// loop Map() using forEach method
question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

for (let [key, value] of question.entries()) { // The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop
  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
} // What is the official...version? 
 //Answer1: ES5, Answer2: ES6, Answer3: ES2015, Answer4:ES7


 // getting the correct answer
const ans = parseInt(prompt('Write the correct answer')) //parseInt converts the content into the integer
console.log(question.get(ans === question.get('correct')));



