
/*
callback function to handle the keys pressed by the user
*/
const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function() {
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
