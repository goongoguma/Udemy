// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(chars) {
  let container = {};
  let max = 0;
  let maxChar = "";

  for (let cha of chars) {
    if (!container[cha]) {
      container[cha] = 1;
    } else {
      container[cha]++;
    }
  }
  // we are going to use for in syntax to loop through an object
  for (let cha in container) {
    if (container[cha] > max) {
      max = container[cha];
      maxChar = cha;
    }
  }
  return maxChar;
}

module.exports = maxChar;
