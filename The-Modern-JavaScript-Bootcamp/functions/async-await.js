// 1. async function always return promise
// 2. value that retured from async function is the value that the promise gets resolved with
new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof num === "number"
      ? resolve(num * 2)
      : reject("Number must be provided");
  }, 2000);
});

const processData = async () => {
  // 3. using async and await, we can perform one operation after the other. and other code will never going to run until either promise resolved or rejected
  let data = await getDataPromise(2);
  data = await getDataPromise(data);
  return data; // 8
};

processData()
  .then(data => {
    console.log("Data", data);
  })
  .catch(error => {
    console.log("Error", error);
  });
