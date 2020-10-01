module.exports = class Command {
  name = '';

  execute(msg) {
    throw new TypeError('Command not implemented.');
  } 
}