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
