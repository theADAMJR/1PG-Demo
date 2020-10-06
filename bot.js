const { Client } = require('discord.js');

const bot = new Client();

bot.login('NzQwNDkyODIwNTA2MzQ1NTE0.Xypzrg.XuwNZQlksJyAyaWBrLvVvMHeReY');

require('./handlers/event-handler')(bot);