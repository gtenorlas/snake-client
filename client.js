const net = require("net");
const { IP, PORT, PLAYER_INITIAL, ENCODING } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding(ENCODING);

  //check if the connection has been established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${PLAYER_INITIAL}`);
  });

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  return conn;
};


//ES6 Shorthand version
module.exports = {
  connect
};