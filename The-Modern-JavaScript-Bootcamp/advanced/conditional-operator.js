// const myAge = 27;
// const message = myAge >= 18 ? "You can vote" : "You cannot vote";
// console.log(message);

const myAge = 27;

const showPage = () => {
  return "Showing the page";
};

const showErrorPage = () => {
  return "Showing the error page";
};

const message = myAge >= 21 ? showPage() : showErrorPage();
console.log(message);

const team = ["Tyler", "Porter"];
let teamMessage =
  team.length <= 4 ? `Team size: ${team.length}` : "Too many people ";
console.log(teamMessage);
