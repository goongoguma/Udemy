// Callback
const getDataCallback = callback => {
  setTimeout(() => {
    callback(undefined, "This is the data");
  }, 2000);
};

getDataCallback((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Promise
const getDataPromise = data =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`This is my success data : ${data}`);
      // reject("This is my promise error");
    }, 2000);
  });

const myPromise = getDataPromise(123);

myPromise.then(
  data => {
    console.log(data);
  },
  err => {
    console.log(err);
  }
);
