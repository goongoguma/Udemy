let myName: string = "max";
let myAge: number = 27;
// myName = 30;
// Even if myName is wrong type, when you execute tsc on command, TS compiler nontheless compiles the code.
// Because maybe there is something that TS is not able to know about
// This is not bad behavior but you can force it in tsconfig.json file
let anything;
anything = 12;

function controlMe(isTrue: boolean, somethingElse: boolean) {
  let result: number;
  if (isTrue) {
    result = 12;
  }
  return result;
}
