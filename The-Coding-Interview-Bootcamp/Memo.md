https://github.com/StephenGrider/algocasts

## 1. Repo Test Setup

- Execute the command `npm install -g jest` inside of the terminal.
- jest is going to test all the code inside of `exercise` folder.
- In order to test only specific code, write `jest/foldername/filename --watch`.

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
