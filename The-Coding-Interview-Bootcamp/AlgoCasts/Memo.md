https://github.com/StephenGrider/algocasts

## 1. Repo Test Setup

- Execute the command `npm install -g jest` inside of the terminal.
- jest is going to test all the code inside of `exercise` folder.
- In order to test only specific code, write `jest/foldername/test.js --watch`.

## 2. reversestring

- Solution 1 (My Solution):

  ```js
  const reverse = str => {
    let rev = (strSplit = str.split(""));
    let revArr = rev.reverse();
    return revArr.join("");
  };

  reverse("abcd ");
  ```

- Solution 2 :

  ```js
  function reverse(str) {
    let container = "";
    for (let i = str.length - 1; i >= 0; i--) {
      container += str[i];
    }
    return container;
  }
  ```

- Solution 3 :

  ```js
  function reverseWord(str) {
    let container = "";

    for (char of str) {
      container = char + container;
    }
    return container;
  }
  ```

- Solution 3 :

  ```js
  function reverse(str) {
    return str.split("").reduce((reversed, character) => {
      return character + reversed;
    }, "");
  }
  ```

## 3. Palindromes

- Solution 1 (My Solution):

  ```js
  function palindrome(str) {
    let container = "";
    for (let i = str.length - 1; i >= 0; i--) {
      container += str[i];
    }
    return str === container;
  }
  ```

- Solution 2 :

  ```js
  function palindrome(str) {
    return str.split("").every((char, i) => {
      return char === str[str.length - i - 1];
    });
  }
  ```

## 4. Reversing an Int

- Solution 1 (My Solution):

  ```js
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
  ```

- Solution 2 :

  ```js
  const reverseInt = num => {
    const numRev = num
      .toString()
      .split("")
      .reverse()
      .join("");

    return parseInt(numRev) * Math.sign(num);
  };
  // Reference for parseInt : https://blog.outsider.ne.kr/361
  // if the number that passed into Math.sign method is negative it will return -1 otherwise it will return 1
  ```

## 5. Max Chars Problem

- So anything like counting the number of characters or comparing the number of characters between two strings we aregoing to use the technique below.
- We are going to take the string and we are going to essentially convert it into an object where the keys of the obejct are the characters from the string and the values are the number of times that character has been found.
  ```js
  "Hello There!"
  // becomes
  {"H":1, "e":3, "l":2, "o":1, "":1, "t":1, "h":1, "r":1, "!":1}
  ```

## 6. Max Chars Character Map

- How are we going to make an object to solve the problem?

- Solution :

  ```js
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
  ```

## 7. FizzBuzz

- Solution 1 :
  ```js
  function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 !== 0 && i % 5 !== 0 && i % 15 !== 0) {
        console.log(i);
      }
      if (i % 15 === 0) {
        console.log("fizzbuzz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      } else if (i % 3 === 0) {
        console.log("fizz");
      }
    }
  }
  ```
- Solution 2 :
  ```js
  function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
        console.log("fizzbuzz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      } else if (i % 3 === 0) {
        console.log("fizz");
      } else {
        console.log(i);
      }
    }
  }
  ```

## 8. Array chunk

- Solution 1 (My Solution):

  ```js
  function chunk(array, size) {
    let container = [];
    let start = 0;
    for (let i = 0; start < array.length; i++) {
      let arr = array.slice(start, size + start);
      start += size;
      // [] === [] -> false!
      container.push(arr);
    }
    return container;
  }
  ```

- Solution 2 :

  ```js
  function chunk(array, size) {
    let container = [];
    let start = 0;
    while (start < array.length) {
      let sliceArr = array.slice(start, start + size);
      start += size;
      container.push(sliceArr);
    }
    return container;
  }
  ```

- Solution 3 :

  ```js
  const chunk = (arrs, num) => {
    const container = [];
    for (let arr of arrs) {
      let last = container[container.length - 1];
      if (!last || last.length === num) {
        container.push([arr]);
      } else {
        last.push(arr);
      }
    }
    return container;
  };
  ```

## 9. Anagrams

- Solution 1 (My Solution):

  ```js
  function anagrams(stringA, stringB) {
    const strA = charObj(stringA);
    const strB = charObj(stringB);

    if (Object.keys(strA).length !== Object.keys(strB).length) {
      return false;
    } else {
      return Object.keys(strA).every(key => strA[key] === strB[key]);
    }
  }

  function charObj(str) {
    let container = {};
    let compareStr = str.replace(/[^\w]/g, "").toLowerCase();
    for (let char of compareStr) {
      if (!container[char]) {
        container[char] = 1;
      } else {
        container[char]++;
      }
    }
    return container;
  }
  ```

- Solution 2 :

  ```js
  function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
      return false;
    } else {
      return Object.keys(aCharMap).every(
        key => aCharMap[key] === bCharMap[key]
      );
    }
  }

  function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  }
  ```

- Solution 3 :

  ```js
  function anagrams(stringA, stringB) {
    return sorting(stringA) === sorting(stringB);
  }

  function sorting(str) {
    let strAB = str.replace(/[^\w]/g, "").toLowerCase();
    return [...strAB].sort().join("");
  }
  ```

## 10. Capitalize

- Solution 1 (My Solution):

  ```js
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
  ```

- Solution 2 :

  ```js
  function capitalize(str) {
    const words = [];

    for (let word of str.split(" ")) {
      words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(" ");
  }
  ```

- Solution 3 :

  ```js
  function capitalize(str) {
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === " ") {
        result += str[i].toUpperCase();
      } else {
        result += str[i];
      }
    }
    return result;
  }
  ```

## 11. Steps

- Solution 1 :
  ```js
  function steps(n) {
    for (let row = 0; row < n; row++) {
      let stair = "";
      for (let column = 0; column < n; column++) {
        if (column <= row) {
          stair += "#";
        } else {
          stair += " ";
        }
      }
      console.log(stair);
    }
  }
  ```
- Recursion

  ```js
  function printNumber(n, dec = 1) {
    // BASE CASE!
    if (n === 0) {
      return;
    }

    console.log(n);
    // When we call the function again, it's extremely critical to make sure that we have changed the arguments in some fashion
    printNumber(n - dec);
  }
  ```

- Recurstion Tips!

  - Figure out the bare minimum pieces of information to represent your problem.
  - Give reasonable defaults to the bare minimum pieces of info.
  - Check the base case. Is there any work left to do? If not, return.
  - Do some work. _Call your function again, making sure the arguments have changed in some fashion._

  - Solution 2 :

  ```js
  function steps(n, row = 0, stair = "") {
    if (n === row) {
      return;
    }
    if (n === stair.length) {
      console.log(stair);
      return steps(n, row + 1);
    }

    if (stair.length <= row) {
      stair += "#";
    } else {
      stair += " ";
    }
    steps(n, row, stair);
  }
  ```

## 12. Pyramid

- Solution 1 :
  ```js
  function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
      let level = "";
      for (let column = 0; column < 2 * n - 1; column++) {
        // calcuate mid point of the row(center index)
        if (midpoint - row <= column && midpoint + row >= column) {
          level += "#";
        } else {
          level += " ";
        }
      }
      console.log(level);
    }
  }
  ```

## 13. Vowels

- Solution 1 (My Solution) :
  ```js
  function vowels(str) {
    let total = 0;
    const standard = "aeiou";
    for (let word of str) {
      if (standard.includes(word.toLowerCase())) {
        total++;
      }
    }
    return total;
  }
  ```
- Solution 2 :
  ```js
  function vowels(str) {
    let count = 0;
    const checker = ["a", "e", "o", "i", "u"];
    for (let char of str.toLowerCase()) {
      if (checker.includes(char)) {
        count++;
      }
    }
    return count;
  }
  ```
- Solution 3 :
  ```js
  function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
  }
  ```

## 14. Matrix

- The key is I can just freely assign any value to any index insdie an array that I want

- Solution 1 :

  ```js
  function matrix(n) {
    const results = [];
    for (let i = 0; i < n; i++) {
      results.push([]);
    }
    // counter is a variable what number we are attempting to push into our results array
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
      // Top row
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;

      // Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;

      // Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;

      // Start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
    return results;
  }
  ```

## 15. Runtime Complexity

- In this section, we are going to start to investigate much more concrete way of deciding what given solution is better than another.
- So this is where we are going to start to talk about `runtime complexity`.
- `Runtime Complexity` describes how performant an algorithm is.
- An interviewer will ask you a question you will solve it on a computer or on a whiteboard and then they will turn to you and say OK what is the runtime complexity of the solution you just did?
- So the goal of this section is to make sure that you have the ability to identify a given runtime complexity.
- When we talk about runtime complexity, we are really asing a very discrete question.
- ex. how much more processing power/time is required to run your algorithm if we double the inputs?
- Common run times that we will use to identify many different algorithm.

  - 1 (Constant Time)
    - No matter how many elements we are working with, the algorithm/operation/ whatever will always take the same amount of time.
  - log(n) (Logarithmic Time)
    - You have this if doubling the number of elements you are iterating over doesn't dobule the amount of work.
    - Always assume that searching operations are log(n).
  - n (Linear Time)
    - Iterating through all elements in a collection of data. If you see a for loop spanning from '0' to 'array.length', you probably have 'n' or linear runtime.
    - Anytime you have linear time, you are saying that if we add one element to our input set, it is going to take one unit of more time to complete the algorithm.
  - n \* log(n) (Quasilinear Time)
    - You have this if doubling the number of elements you are iterating over does not double the amount of work.
    - Always assume that any sorting operation is n\*log(n)
    - one plus a little bit for every element we add to our input set.
    - usually many different sorting algorithm.
  - n^2 (Quadratic Time)
    - Every element in a collection has to be compared to every other lement. 'The handshake problem'.
    - As soons as we started to increase or add one element to our input to the algorithm, it started to take dramatically more time to produce the result set.
  - 2^n (Exponential Time)
    - If you add a 'single' element to a collection, the processing power required doubles.

## 16. More on Runtime Complexity

- Bit 'O' Notation
  - It is another way of referencing runtime complexity.
  - O(n) : Linear
  - O(1) : Constant
  - O(n^2) : Quadratic
- Tips for identifying complexity or number.

  - Iterating with a simple for loop through a single collection?
    - Probably O(n)
  - Iterating through half a collection?
    - Still O(n). There are no constants in runtime.
  - Iterating through two 'different' collections with separate for loops?
    - O(n+m)
    - `n` indicates performance impact of first string and `m` second string.
  - Two nested for loops iterating for the same collection (danger!)
    - O(n^2)
  - Two nested for loops iterating over different collections?
    - O(n\*m)
  - Sorting?
    - Anytime you ever see a problem for sorting any requirement whatsoever, it is going to be?
    - O(n\*long(n))
  - Searching a sorted array?
    - O(log(n))

- Space Complexity is a thing too
  - How much more meory is required by doubling the problem set?

## 17. Fibonacci

- Solution 1 :

  ```js
  function fib(n) {
    let container = [0, 1];

    for (let i = 2; i <= n; i++) {
      let a = container[i - 2];
      let b = container[i - 1];
      container.push(a + b);
    }
    return container[n];
  }
  // linear runtime
  ```

- Solution 2 : (recursive solution)

  ```js
  function fib(n) {
    if (n < 2) {
      return n;
    }

    return fib(n - 1) + fib(n - 2);
  }
  ```

- When the program calculte fib function using recursive solution, 1, 2, 3, 4 these all appear to have been computed rather quickly like around one milisecond. But then by increasing up to 15. It took about a thousand times longer to compute!
- Why are we seeing such a dramatic increase in time for such a small increase in the value.
- We've got 15 calls to the function with number 5.
- But when the number is increased to 6, we've got 27 calls total.
- This is what we refer to `Exponential Run Time`.
- For every additional element we are getting a dramatic increase in the number of function calls or essentially operations required to calculate our value that we are trying to determine.
- So the recursive solution that we are working with is what we would refer to as an `exponential recursion`.
- _We never ever want to accept an exponential time algorithm as a solution to an interview question._
- How to improve this?
  - Function is being called many times with identical arguments.
  - Use `memoization`
- Memoization

  - Store the arguments of each function call along with the result. _If the function is called again with the same arguments, return the precomputed result, rather than running the function again._

- Solution 3: (Memoization)

  ```js
  function memoize(fn) {
    const cache = {};
    return function(...args) {
      // args is like argument that passed into memoize.
      if (cache[args]) {
        return cache[args];
      }
      // use apply method to function call with array argument
      const result = fn.apply(this, args);
      cache[args] = result;

      return result;
    };
  }

  function fib(n) {
    if (n < 2) {
      return n;
    }

    // memoization version of fib
    return fib(n - 1) + fib(n - 2);
  }

  fib = memoize(fib);
  ```

## 18. Data Structure

- It is a ways of organizing information with optimal 'runtime complexity' for adding or removing records
- So in other words, these different data structures that we are going to look at all have very well optimized ways of accessing or editing data.
- Javascript natively implements several data structures. You will still be asked about 'inferior' data structures.
