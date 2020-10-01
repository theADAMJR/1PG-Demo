const Command = require('./command');

module.exports = new class extends Command {
  name = 'ping';

  execute(msg) {
    msg.channel.send(`🏓 Pong`);
  }
};