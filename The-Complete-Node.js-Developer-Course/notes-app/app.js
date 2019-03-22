const getChalk = require("./chalk");
const yargs = require("yargs");

// Customize yargs version
yargs.version("1.1.0");

// add, remove, list, read

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("Adding a new note!");
  }
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("Remove a note!");
  }
});

// Create list command
yargs.command({
  command: "list",
  describe: "List a note",
  handler: function() {
    console.log("List a note!");
  }
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("Read a note!");
  }
});

console.log(yargs.argv);
