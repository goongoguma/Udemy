// CLOSURE
// CLOSURE IS THE COMBINATION OF A FUNCTION WITH THE LEXICAL SCOPE IN WHICH WAS DEFINED

const createCounter = () => {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    }
  };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// uncurling pattern (standard version)
const add = (a, b) => a + b;

// curling pattern
// it refers to the process of transforming single function that takes a lot of arguments to multiple functions that take subset of those arguments
const createAdder = a => {
  return b => {
    return a + b;
  };
};

const addTen = createAdder(10);
console.log(addTen(-2));
console.log(addTen(20));
const add100 = createAdder(100);
console.log(add100(-90));

// Tipper
const createTipper = a => {
  return b => {
    return a * b;
  };
};

const tipCal = createTipper(0.3);
const tipCal2 = createTipper(0.4);
console.log(tipCal(100));
console.log(tipCal2(100));
