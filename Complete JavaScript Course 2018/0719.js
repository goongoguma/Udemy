// SYNCHRONOUS
const secont = () => {
  console.log(`How are you doing?`);
};

const first = () => {
  console.log(`Hey There!`);
  second();
  console.log(`The end`);
};

first();

// ASYNCHRONOUS
const second = () => {
  setTimeout( () => {
    console.log(`Async Hey There!`);
  }, 2000);
};

const first = () => {
  console.log(`Hey There!`);
  second();
  console.log(`The end`);
};

first();

///////////////////////////////////

// ASYNCHRONOUS
const image = document.getElementById(`img`).src;

processLargeImage(image, () => {
  console.log(`Image processed!`);
});

// Allow asynchronous functions to run in the "background";
// We pass in callbacks that run once the function has finished its work
// Move on immediately : Non-blocking!
// The callback function is used to defer actions into the future. In order to make the code non-blocking 

/////////////////////////////////////////////////////
//// PROMISE 
// -> Object that keeps track about whether a certain event has happened already or not
// -> Determines what will happen after the event has happened
// -> Implements the concept of a future value that we are expecting
// -> Before the event has happened the promise is pending then after the event has happened the promise is called,
// settled or resolved.
// -> A result is available, then the promise is fulfilled, but if there was an error then the promise is rejected.
