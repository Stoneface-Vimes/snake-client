const IP = '172.46.2.204';
const PORT = 50541;

const input = {
  'w': ['Move: up', 's'],
  'a': ['Move: left', 'd'],
  's': ['Move: down', 'w'],
  'd': ['Move: right', 'a'],
}

const messages = {
  'e': 'Say: !!!',
  'q': 'Say: ???'
}

module.exports= {
  IP,
  PORT,
  input,
  messages
};