// product --> Object.prototype --> null
const product = {
  name: "Influence"
};
// const product = new Object({
//   name: "The war Of Art"
// });

Object.prototype.someNewMethod = () => "This is the new function";

// hasOwnProperty
console.log(product.someNewMethod());
console.log(product);
