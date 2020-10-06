const { readdirSync } = require('fs');
const { resolve } = require('path');

const events = new Map();

const eventsDir = resolve('./handlers/events');
const files = readdirSync(eventsDir);

for (const file of files) {
  const event = require(`${eventsDir}/${file}`);
  if (!event.on) continue;

  events.set(event.on, event);
}

module.exports = (bot) => {
  for (const event of events.values()) {
    bot.on(event.on, event.invoke.bind(event));
  }
};