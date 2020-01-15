
let connection;

//Set up user interface
//Specifically, so that we can handle user inpute via stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', data => { //On recieveing input of 'data', pass
  //the data to the handleUserInput function
    handleUserInput(data);
  })
  return stdin;
}

//Exits when ctrl + c is pressed
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit()
  }
  if (key === '\u0077') { //On input: w, Send 'Move: up' to the serer
    connection.write('Move: up');
  }
  if (key === '\u0061') { //On input: a, Send 'Move: left' to the serer
  connection.write('Move: left');
  }
  if (key === '\u0073') {//On input: s, Send 'Move: down' to the serer
  connection.write('Move: down');
  }
  if (key === '\u0064') {//On input: d, Send 'Move: right' to the serer
  connection.write('Move: right');
  }
}

module.exports = {setupInput}