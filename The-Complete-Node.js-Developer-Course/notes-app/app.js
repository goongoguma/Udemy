const validator = require("validator");
const getNotes = require("./notes");

const msg = getNotes();

console.log(msg);

console.log(validator.isEmail("gmail.com"));
console.log(validator.isURL("www.google.com"));
