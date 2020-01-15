const {connect} = require('./client');

// Establishes connection with the game server
console.log('Connecting...');
connect();

//Set up user interface
//Specifically, so that we can handle user inpute via stdin
const setupInput = function() {
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
}

setupInput();
