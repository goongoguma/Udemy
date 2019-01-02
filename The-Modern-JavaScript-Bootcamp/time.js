// Unix Epoch - January 1st 1970 00:00:00

// we can represent specific time providing arguments in the function call

// THIS ALLOWS US TO GET TIME USING UNIX EPOCH AND SAVED IN LOCALSTORAGE
const now = new Date();
const timeStamp = now.getTime();

// THIS IS USED AFTER WE GET A DATA FROM A LOCALSTORAGE AND DO SOMETHING RELATED TO THE DATE
const myDate = new Date(timeStamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// // Jan represeted 0
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

const timeOne = new Date("May 5 2017 02:00:00");
const timeTwo = new Date();
const timeOneTimeStamp = timeOne.getFullYear();
const timeTwoTimeStamp = timeTwo.getFullYear();
console.log(timeTwoTimeStamp);

if (timeOneTimeStamp < timeTwoTimeStamp) {
  console.log(timeOne.toString());
} else if (timeOneTimeStamp > timeTwoTimeStamp) {
  console.log(timeTwo.toString());
}

// USING MOMENT LIBRARY
const now = moment(); // Wed Jan 02 2019 19:31:21 GMT+0900
now.add(1, "year"); // Thu Jan 02 2020 19:32:27 GMT+0900
now.subtract(20, "days"); // Thu Dec 13 2018 19:33:03 GMT+0900
now.add(1, "year").subtract(20, "days"); // Fri Dec 13 2019 19:33:42 GMT+0900
console.log(now.toString());
console.log(now.format()); // 2020-11-23T19:35:47+09:00
console.log(now.format("MMMM Do, YYYY")); // November 23rd, 2020
console.log(now.fromNow()); // in 2 years

const nowTimeStamp = now.valueOf();
console.log(nowTimeStamp); // 1606128290083 from Unix Epoch
console.log(moment(nowTimeStamp).toString()); // Mon Nov 23 2020 19:45:55 GMT+0900

const birthday = moment();
birthday
  .year(1990)
  .month(7)
  .date(21);
console.log(birthday.format("MMMM Do, YYYY")); // August 21st, 1990
