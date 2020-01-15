const net = require('net');

// Establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host:'172.46.2.204',
    port: 50541
  });
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
}

console.log('Connecting...');
connect();