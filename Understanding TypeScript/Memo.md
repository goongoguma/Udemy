- ## Tutorial Memo Index

- [1. 타입스크립트는 무엇인가](#1)
- [2. 타입스크립트를 사용하는 이유](#2)
- [3. 타입스크립트 설치](#3)
- [4. 타입스크립트 사용하기](#4)
- [5. 환경설정](#5)
- [6. Type Bascis](#6)
- [7. 타입 넣어주기](#7)
- [8. 배열과 타입들](#8)
- [9. Tuples](#9)
- [10. Enums](#10)
- [11. Any Type](#11)
- [12. 함수에 타입 사용하기](#12)
- [13. 타입으로서의 함수](#13)
- [14. 객체와 타입](#14)
- [15. 중간 예제](#15)
- [16. Custom 타입과 타입 aliases](#16)
- [17. Union](#17)
- [18. 실행되는 동안 타입 체크하기](#18)
- [19. Never Type](#19)
- [20. Nullable Type](#20)
- [21. TS 코드가 컴파일되는 과정](#21)
- [22. tsconfig의 noEmitOnError](#22)
- [23. tsconfig의 source Maps](#23)
- [24. tsconfig의 noImplicitAny](#24)
- [25. tsconfig의 noUnusedParameters](#25)

<h2 id="1">1. What is TypeScript?</h2>

- _TypeScript is a wrapper so to say it compiles down to Javascript_ in the end and introduces new features which we can use in our code and which will then run in the browser as the TypeScript compiler will make sure to find ways to compile all these great new features into ES5 code to then run in any browser.
- _The most important feature is that TypeScript is that strongly typed language_ which means you have to be specific which type of variable is
- So that you can't have a string variable and then assign a number to it and get through with it.
- _TypeScript is only an extra language we can use during development, it is not what runs in the browser._
- Easy to say, 타입스크립트 : 코드를 실행하기전 타입관련 문제를 찾아낼 수 있는 기술.

<h2 id="2">2. Why TypeScript and How to use it?</h2>

- We simply mix our TS code with JS code, any degree of mixture is possible and then we get the benefits from using TS by simply getting extra check and making sure that not somewhere in our code we are kind of introducing a bug because us using wrong type.

<h2 id="3">3. Installing TypeScript</h2>

- In terminal, type `npm -g install typescript`.

<h2 id="4">4. Using TypeScript</h2>

- You can use TS with a file name ended with extension `.ts`.
- And run TS compiler with `tsc script.ts`
- This command line is essentially saying that compile this TS file to JS file.
- After run the command, when you check the folder, we will find the file that compiled to JS file.

<h2 id="5">5. Setting up the Course Workspace</h2>

- Command line `tsc --init` in order to not only put this folder under control of npm but now also put it under control of TS.
- And the command will in the end create a `tsconfig.json` file which tells TS 'hey the folder here is TS project by running tsc, Please compile all TS files.'

<h2 id="6">6. Type Basics</h2>

- Which types do we have in TS?
  - `let myName = 'Max';` looks just a sting that assinged it into a variable.
  - But there is more than that happening behind the scenes.
  - TS recognizes that I assign a string into a variable and therefore automatically saves the information.
  - It keeps in mind that the variable be of type sting.

<h2 id="7">7. Assigning Types Explicitly</h2>

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

<h2 id="8">8. Arrays and Types</h2>

```js
let hobbies = ["cooking", "Sports"];
console.log(hobbies[0]); // coocking
console.log(typeof hobbies); // object
hobbies = [100]; // error syaing 'Type number[] is not assignable to type 'string[]'.

// But if we set variable hobbies as...

let hobbies: any[] = ["cooking", "Sports"]; // it works!
```

<h2 id="9">9. Tuples</h2>

- New type available in TS.
- It is just arrays with mixed types and a limited number of items.
  ```js
  let address: [string, number] = ["Superstreet", 99];
  ```
- In tuples type, order of index is very crucial.

<h2 id="10">10. Enums</h2>

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

<h2 id="11">11. The "Any" Type</h2>

```js
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
```

- `Any` type is the most flexible type you have in TS and therefore you should really carefully use it. Try to be explicit.

<h2 id="12">12. Using Types in Functions (Arguments & Return Values)</h2>

```js
let myName = "Max";

function returnMyName(): string {
  // : string defines what type of value should return
  return myName; // it returns only string
}
console.log(returnMyName); // Max
```

- A special type regarding the return function or the return type is `void` type.
- If I would have a function which simply is named say 'hello' and all it does is print hello to the console,

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

<h2 id="13">13. Functions as Types</h2>

- Function types

```js
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

// myMultiply only accepts function that two arguments and return value are number.
// But name of arguments are totally ignored.
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log(myMultiplay(5, 2)); // 10
```

<h2 id="14">14. Objects and Types</h2>

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

<h2 id="15">15. Example: Putting it all together in a Complex Object</h2>

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

<h2 id="16">16. Creating custom Types with Type Aliases</h2>

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

<h2 id="17">17. Allowing multiple Types with Union Types</h2>

- Union types

  ```js
  let myRealAge: number | string = 27;
  myrRealAge = "27";
  myRealAge = true; // error
  ```

- myRealAge may be either a number or a string but certainly not boolean type.

<h2 id="18">18. Checking for Types during Runtime</h2>

- Check types

  ```js
  let finalValue = "A string";
  if (typeof finalValue === "number") {
    console.log("Final value is a number"); // no error but no output on a screen either because type of fianlValue is a string not a number
  }
  ```

- You would use this for example in let's say some function or some code where you are not really sure what values you are getting. And you just want to do something upon certain types.
- Suppose for a calculation, you only want to perform made when you are getting numbers and with this `check type`, you can make sure that the values you are using are indeed of type number.

<h2 id="19">19. The 'never` type (added with TS 2.0)</h2>
  ```js
  function neverReturns(): never {
    throw new Error("An error!"); // nothing returns
  }
  ```
- It never returns anything.
- It is different with `void`! (because void returns error)
- You might use it in functions or in parts of your code where you know it should never be reached because it kind of then is stuck.

<h2 id="20">20. Nullable Types (added with TS 2.0)</h2>

- You should not be able to assign null to types except for if you explicitly state that you want to do this.
  ```js
  let canBeNull: number | null = 12;
  canBeNull = null; // we want to remove the value
  let canAlsoBeNull;
  ```
- With TS 2.0, you can also be explicit about which you may be null and which should never be null.
- We can now make sure that we don't accidentally assign nulls somewhere in our code to a variable which theoretically should only hold numbers.
- So when the type `nullable` is initially assigned, it does not give an error.

<h2 id="21">21. How Code gets Compiled</h2>

- TS compiler gives you an error but it compiles nonetheless.
- It is saying that 'it might be wrong'.
- Which means the code still works after it has been compiled.
- But you can force to TS not work in `tsconfig.json`file.

<h2 id="22">22. Changing the Compiler Behavior on Errors</h2>

- If you do not want to create `app.js` in case of any errors, you can set `noEmitOnError` to true in `tsconfig.json` file.

  ```js
    {
    "compilerOptions": {
      "module": "commonjs",
      "target": "es5",
      "noImplicitAny": false,
      "sourceMap": false,
      "noEmitOnError": true,
      "strictNullChecks": false
    },
    "exclude": ["node_modules"]
  }
  ```

<h2 id="23">23. Debugging you TS code using Source Maps</h2>

- If you set `sourceMap` as true then you will see that not only JS file get created but also get `.map` file which is the source map for the file get created as well.
- What is the advantage of the source map?
  - After you set `sourceMap` and execute command `tsc`
  - When you see `Source` tab in Chrome developer tools, you can find `app.ts` file.
  - So basically we can debug TS code in the browser directly in TS file.
  - By setting `sourceMap` option to true, we can make TS debugging much easier.

<h2 id="24">24. Avoiding implicit 'Any'</h2>

- Just variable `let anything`, we can assign all kinds of value because type `: any` is implicitly set to type any.
- But when `noImplicitAny` in `tsconfig.json` file is set to true and execute `tsc`, we will get an error.

<h2 id="25">25. Compiler Improvements with TS 2.0</h2>

```js
function controlMe(isTrue: boolean) {
  let result: number;
  if (isTrue) {
    result = 12;
  }
  return result;
}
```

- The code works okay but actually we have a problem here
- `result` might not be initialized here when we return it
- It is implicitly null here because it should be typeof number
- If we add `strictNullChecks` in `tsconfig.json`, and set it true, and run `tsc`, we will get an error in console.
- `noUnusedParameters` in `tsconfig.json` makes an error when there is a parameter that we do not use.

<h2 id="26">26. React with TS<h2>

- Install create-react-app with TS `create-react-app . --scripts-version=react-scripts-ts`.
- How to set up types in react with TS.

  ```js
  interface ICounterOutputProps {
    counter: number;
  }

  const counterOutput = (props: ICounterOutputProps) => {
    return <p style={{ textAlign: "center" }}>{props.counter}</p>;
  };
  ```

- Do not forget to add `I` after `interface`.
- This is how use state in React with TS.

```js
interface IAppState {
  counterValue: number;
}

class App extends React.Component<{}, IAppState> {
  public state = { counterValue: 0 };

  public render() {
    return (
      <div style={{ textAlign: "center" }}>
        <CounterOutput counter={this.state.counterValue} />
        <button onClick={this.incHandler}>Increment</button>
        <button onClick={this.deHandler}>Decrement</button>
      </div>
    );
  }

  private incHandler = () => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue + 1 };
    });
  };

  private deHandler = () => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue - 1 };
    });
  };
}

export default App;
```

- First, use `private` and `public` method. Unless you will get an error.
  ```js
  The class property 'incHandler' must be marked either 'private', 'public', or 'protected'
  ```
- Second, always place `public` before `private`. Unless you will get an error.
  ```js
  Declaration of public instance method not allowed after declaration of private instance method. Instead,this should come after public instance fields.
  ```
- You can check more detail at here https://github.com/Microsoft/TypeScript-React-Starter
