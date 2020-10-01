const { Client } = require('discord.js');
const { handle } = require('./handlers/command-handler');

const bot = new Client();

bot.on('ready', () => console.log('Ready!'));
bot.on('message', async (msg) => handle(msg));

bot.login('NzQwNDkyODIwNTA2MzQ1NTE0.Xypzrg.XuwNZQlksJyAyaWBrLvVvMHeReY');

require('./handlers/command-handler');