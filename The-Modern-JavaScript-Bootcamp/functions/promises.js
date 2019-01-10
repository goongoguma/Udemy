// Callback
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2);
    } else {
      callback("Number must be provided");
    }
  }, 2000);
};

// // EXAMPLE OF CALLBACK HELL
// getDataCallback(2, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     getDataCallback(data, (err, data) => {
//       if (err) {
//         console.log("err");
//       } else {
//         console.log(data);
//       }
//     });
//   }
// });

// PROMISE & PROMISE CHAIN
const getDataPromise = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided");
    }, 2000);
  });

// Promise chaining
getDataPromise(10)
  .then(data => {
    return getDataPromise(data);
  })
  // in promise chaining, we don't have to return a promise from then. I can return anything I would like
  // and that is gonna get passed along to the next step in the promise chain
  .then(data => {
    return "this is some test data";
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
