const { input } = require('./constants'); 
const {messages} = require('./constants');


let x;
let connection;
let invalidMove = '';

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
    if (key in input && key !== invalidMove) {
      clearInterval(x);
      x = setInterval(() => {
        connection.write(input[key][0]);
      }, 50);
      invalidMove = input[key][1] === undefined ? invalidMove : input[key][1];
    }
    if (key in messages) {
      connection.write(messages[key]);
    }



}

module.exports = { setupInput }