//import a module using a shorthand version
const { connect } = require("./client");
const { setupInput } = require("./input");


console.log("Connecting...");
connect();
setupInput();