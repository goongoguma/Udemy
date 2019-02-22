- ## Tutorial Memo Index

## 1. What is TypeScript?

- _TypeScript is a wrapper so to say it compiles down to Javascript_ in the end and introduces new features which we can use in our code and which will then run in the browser as the TypeScript compiler will make sure to find ways to compile all these great new features into ES5 code to then run in any browser.
- _The most important feature is that TypeScript is that strongly typed language_ which means you have to be specific which type of variable is
- So that you can't have a string variable and then assign a number to it and get through with it.
- _TypeScript is only an extra language we can use during development, it is not what runs in the browser._
- Easy to say, 타입스크립트 : 코드를 실행하기전 타입관련 문제를 찾아낼 수 있는 기술.

## 2. Why TypeScript and How to use it?

- We simply mix our TS code with JS code, any degree of mixture is possible and then we get the benefits from using TS by simply getting extra check and making sure that not somewhere in our code we are kind of introducing a bug because us using wrong type.

## 3. Installing TypeScript

- In terminal, type `npm -g install typescript`.

## 4. Using TypeScript

- You can use TS with a file name ended with extension `.ts`.
- And run TS compiler with `tsc script.ts`
- This command line is essentially saying that compile this TS file to JS file.
- After run the command, when you check the folder, we will find the file that compiled to JS file.

## 5. Setting up the Course Workspace

- Command line `tsc --init` in order to not only put this folder under control of npm but now also put it under control of TS.
- And the command will in the end create a `tsconfig.json` file which tells TS 'hey the folder here is TS project by running tsc, Please compile all TS files.'

## 6. Type Basics

- Which types do we have in TS?
  - `let myName = 'Max';` looks just a sting that assinged it into a variable.
  - But there is more than that happening behind the scenes.
  - TS recognizes that I assign a string into a variable and therefore automatically saves the information.
  - It keeps in mind that the variable be of type sting.

## 7. Assigning Types Explicitly

```js
let myRealAge;
myRealAge = 27;
myRealAge = "27";
```

- I do not get any error because I don't assign a type here, TS treats this as type any.
- If we want to fix this we can pre-set the type of a variable
  ```js
  let myRealAge: number;
  ```
- This is how explicitly assign types.

## 8. Arrays and Types

```js
let hobbies = ["cooking", "Sports"];
console.log(hobbies[0]); // coocking
console.log(typeof hobbies); // object
hobbies = [100]; // error syaing 'Type number[] is not assignable to type 'string[]'.

// But if we set variable hobbies as...

let hobbies: any[] = ["cooking", "Sports"]; // it works!
```

## 9. Tuples

- New type available in TS.
- It is just arrays with mixed types and a limited number of items.
  ```js
  let address: [string, number] = ["Superstreet", 99];
  ```
- In tuples type, order of index is very crucial.

## 10. Enums

- New type available in TS.
- It is a feature to make numbers more expressive
  ```js
  enum Color {
    Grey, // 0
    Green, // 1
    Blue // 2
  }
  let myColor: Color = Color.Green
  console.log(myColor) // 1
  ```
- This is how you can add multiple values to Enum and then refer to them.
- You also can assign custom value
  ```js
  enum Color {
    Grey, // 0
    Green = 100, // 100
    Blue
  }
  let myColor: Color = Color.Green
  let myColor2: Color = Color.Blue
  console.log(myColor) // 100
  console.log(myColor2) // 101
  ```
- This means that it will always refer to the last item in front of it.

## 11. The "Any" Type

```js
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
```

- `Any` type is the most flexible type you have in TS and therefore you should really carefully use it. Try to be explicit.

## 12. Using Types in Functions (Arguments & Return Values)

```js
let myName = "Max";

function returnMyName(): string {
  // : string defines what type of value should return
  return myName; // it returns only string
}
console.log(returnMyName); // Max
```

- A special type regarding the return function or the return type is `void` type.

```js
function sayHello(): void {
  console.log("hello"); // hello
  return myName; // it returns error because : void indicates 'there is nothing to be returned'
}
```

- Argument types

```js
function muliply(value1, value2): number {
  return value1 * value2;
}
console.log(multiply(2, "Max")); // NaN

// and

function muliply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(2, "Max")); // error
```

## 13. Functions as Types

- Function types

```js
function muliply(value1: number, value2: number): number {
  return value1 * value2;
}

// myMultiply only accepts function that two arguments and return value are number.
// But name of arguments are totally ignored.
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log(myMultiplay(5, 2)); // 10
```

## 14. Objects and Types

- Objects

```js
let userData = {
  name: "Max",
  age: 27
};
userData = {}; // error saying that 'Property 'name' is missing in type '{}'.
// Which means TS recognizes the userData as an object and properties inside of it.
userData = {
  a: "Hello",
  b: 22
};
// This object still occurs an error because the name of properties don't match with the first one.
```

- So where names do not matter in function type on the other hand in object property names do matter.
- Function : Order is important thing
- Object : Order is not clear. It may change behind the scenes therefore name of properties are important.
- For the explicit object type,
  ```js
  let userData: { name: string, age: number } = {
    name: "Max",
    age: 27
  }; // it works
  ```

## 15. Example: Putting it all together in a Complex Object

- Complex Object

```js
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};
```

- `data` property should be an array of numbers
- `output` property is actually a function that has only one argument that name `all` and type of `boolean`, it should give us an array of numbers.

## 16. Creating custom Types with Type Aliases

- Suppose we want to create a `complex2` variable that works same as `complex` variable above.

```js
let complex2: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};
```

- We have to copy the code from `complex` and paste it into `complex2`.
- But we can use alias to store a type.

  - type alias

  ```js
  // Complex is not a variable. It is a type!
  type Complex = { data: number[], output: (all: boolean) => number[] };

  let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function(all: boolean): number[] {
      return this.data;
    }
  };
  ```
