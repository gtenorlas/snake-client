// Stores the active TCP connection object.
let connection;

/*
callback function to handle the keys pressed by the user
*/
const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {

    //send string "Move: up" to the server
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 'z') {
    connection.write("Say: I am great");
  } else if (key === 'x') {
    connection.write("Say: Quit!");
  }
};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
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
