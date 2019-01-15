const printTeam = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(", ")}`);
};

const team = {
  name: "Liberty",
  coach: "Tim",
  players: ["Jack", "Tom", "Sherry", "Smith"]
};
printTeam(team.name, team.coach, ...team.players);

const cities = ["NewYork", "Seoul", "Tokyo"];

const citiesCopy = ["Santiago", ...cities];

// The Object Spread Syntax
let house = {
  bedrooms: 2,
  bathrooms: 1.5,
  yearBuilt: 2017
};

let newHouse = {
  // we can set a new value for the object
  basement: true,
  // all of the properties from house will copy over this object
  ...house
};

newHouse.yearBuilt = 2018;

console.log(house);
console.log(newHouse);

// Object Spread Syntax Challenge
const person = {
  name: "Jay",
  age: 25
};

const location = {
  city: "Incheon",
  country: "S.Korea"
};

const overview = {
  ...person,
  ...location
};

console.log(overview);
