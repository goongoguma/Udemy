// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const strSplit = str.slice().split("");
  strSplit.splice(strSplit[0], 1, str[0].toUpperCase());
  for (let i = 1; i < strSplit.length; i++) {
    if (strSplit[i - 1] === " ") {
      strSplit.splice(i, 1, str[i].toUpperCase());
    }
  }
  return strSplit.join("");
}

module.exports = capitalize;
