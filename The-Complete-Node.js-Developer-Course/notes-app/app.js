const getNotes = require("./notes");
const getChalk = require("./chalk");

const msg = getNotes();

const chalk = getChalk;

console.log(msg);
console.log(chalk.green("Success!"));
