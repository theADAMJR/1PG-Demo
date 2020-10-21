const Command = require('./command');
const guilds = require('../data/guilds');

module.exports = new class extends Command {
  name = 'prefix';

  async execute(msg, newPrefix) {
    const savedGuild = await guilds.get(msg.guild.id);
    if (!newPrefix)
      return msg.channel.send(`Current prefix: \`${savedGuild.general.prefix}\``);

    savedGuild.general.prefix = newPrefix;
    await savedGuild.updateOne(savedGuild);

    return msg.channel.send(`Prefix was changed to \`${newPrefix}\``);
  }
};