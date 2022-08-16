const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "10.0.2.15", // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //check if the connection has been established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: GPT");
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