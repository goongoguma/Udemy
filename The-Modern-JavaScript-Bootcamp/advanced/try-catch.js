const getTip = amount => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    throw Error("Argument must be a number");
  }
};

try {
  const result = getTip(10);
  console.log(result);
} catch (e) {
  // CATCH BLOCK RUNS WHEN TRY BLOCK THROWS ERROR
  console.log("catch block is running");
}
