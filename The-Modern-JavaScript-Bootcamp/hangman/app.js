// PRIMITIVE VALUE : STRING, NUMBER, BOOLEAN, NULL, UNDEFINED

// Object : myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null

// WHEN WE TRY TO ACCESS A METHOD ON PRIMITIVE VALUE, IT CONVERTS INTO AN OBJECT AND THEN CALL METHOD ON THAT
// String: myString --> String.prtotype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Obejct.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const product = "Computer";
console.log(product);

const otherProduct = new String("Phone");

console.log(otherProduct);
