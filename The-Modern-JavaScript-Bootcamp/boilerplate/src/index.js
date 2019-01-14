import otherSquare, { add, name } from "./utilities";
import otherScream from "./scream";

// 기능 하나가 담긴 함수를 export 할때는 namedExport가, 기능이 여러개인 함수 여러개를 export 할때는 defaultExport를 쓰는게 좋다.

console.log("index.js");
console.log(add(5, 2));
console.log(name);
console.log(otherSquare(10));
console.log(otherScream("hello world"));
