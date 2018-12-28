let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723
};

// Using objects as an arguments, the function can return another object base on it
let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

// Challenge area
// Create function - take fahrenheit in - return object with all three

let temp = function(fahrenheit) {
  return {
    fahrenheit,
    celcius: (fahrenheit - 32) / 1.8,
    kelvin: ((fahrenheit - 32) * 5) / 9 + 273.15
  };
};

let tempConvert = temp(74);
console.log(tempConvert);
