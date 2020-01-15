
let connection;
let invalidMove;

//Set up user interface
//Specifically, so that we can handle user inpute via stdin
const setupInput = function (conn) {
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
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit()
  }
  if (key === 'w' && invalidMove !== 's') { //On input: w, Send 'Move: up' to the serer
    connection.write('Move: up');
    invalidMove = key;
  }
  if (key === 'a' && invalidMove !== 'd') { //On input: a, Send 'Move: left' to the serer
    connection.write('Move: left');
    invalidMove = key;
  }
  if (key === 's' && invalidMove !== 'w') {//On input: s, Send 'Move: down' to the serer
    connection.write('Move: down');
    invalidMove = key;
  }
  if (key === 'd' && invalidMove !== 'a') {//On input: d, Send 'Move: right' to the serer
    connection.write('Move: right');
    invalidMove = key;
  }
  if (key === 'e') {//On input: e, send '!!!'
    connection.write('Say: !!!');
  }
  if (key === 'q') {//On input: q, send '???'
    connection.write('Say: ???');
  }
}

module.exports = { setupInput }