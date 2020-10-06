const EventHandler = require('./event-handler');
const { handle } = require('../command-handler');

module.exports = new class extends EventHandler {
  on = 'message';

  invoke(msg) {
    return handle(msg);
  }
}