const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, CHAT_KEYS } = require("./constants");

// Stores the active TCP connection object.
let connection;

/*
callback function to handle the keys pressed by the user
*/
const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  } else if (key === MOVE_UP_KEY) {
    //send string "Move: up" to the server
    connection.write("Move: up");
  } else if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }

  //special keys to create a bubble chat
  if (key in CHAT_KEYS) {
    connection.write(CHAT_KEYS[key]);
  }
};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  //store server object to connection
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //handle event for keyboard input
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput
};
