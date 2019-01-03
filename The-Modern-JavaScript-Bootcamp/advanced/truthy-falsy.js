const products = [{ name: "Computer mouse" }];
const product = products[0];

// TRUTHY - VALUES THAT RESOLVE TO TRUE IN BOOLEAN CONTEXT
// TRUTHY - EVEN EMPTY OBJECT, ARRAY HAVE TRUTHY VALUE
// FALSY - VALUES THAT RESOLVE TO FALSE IN BOOLEAN CONTEXT
// FALSY VALUES - FALSE, 0, EMPTY STRING, null, undefined, NaN

if (product) {
  console.log("Product found");
} else {
  console.log("Product not found");
}
