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

getDataPromise(2).then(
  data => {
    getDataPromise(data).then(
      data => {
        console.log(`Promise data: ${data}`); // 8
      },
      err => {
        console.log(err);
      }
    );
  },
  err => {
    console.log(err);
  }
);

// Promise chaining
getDataPromise(10)
  .then(data => {
    return getDataPromise(data);
  })
  .then(data => {
    return getDataPromise(data);
  })
  .then(data => {
    console.log(data); // 40
  })
  .catch(err => {
    console.log(err);
  });
