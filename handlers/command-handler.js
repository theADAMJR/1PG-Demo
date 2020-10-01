const { readdirSync } = require('fs');
const { resolve } = require('path');

const commands = new Map();

const commandsDir = resolve('./commands');
const files = readdirSync(commandsDir);

for (const file of files) {
  const command = require(`${commandsDir}/${file}`);
  if (!command.name) continue;

  commands.set(command.name, command);
}

async function handle(msg) {
  try {
    const prefix = '.';
    const commandName = msg.content.slice(prefix.length);
  
    const command = commands.get(commandName);
    await command?.execute(msg);
  } catch (err) {
    msg.channel.send(`⚠ ${err?.message}`);
  }
}

module.exports.handle = handle;