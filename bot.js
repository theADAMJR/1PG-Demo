const { Client } = require('discord.js');
const config = require('./config.json');

const bot = new Client();

bot.login(config.bot.token);

require('./handlers/event-handler')(bot);