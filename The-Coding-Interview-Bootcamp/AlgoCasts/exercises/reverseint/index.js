// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let nStr = n.toString();
  let container1 = "";
  let container2 = "-";
  if (n === 0) {
    return n;
  }
  if (Math.sign(n) === 1) {
    for (let i = nStr.length - 1; i >= 0; i--) {
      if (nStr[i] !== "0") {
        container1 += nStr[i];
      }
    }
    return parseInt(container1);
  } else if (Math.sign(n) === -1) {
    for (let i = nStr.length - 1; i >= 0; i--) {
      if (nStr[i] !== "-" && nStr[i] !== "0") {
        container2 += nStr[i];
      }
    }
    return Number(container2);
  }
}

module.exports = reverseInt;
