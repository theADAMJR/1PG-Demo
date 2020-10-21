const EventHandler = require('./event-handler');

module.exports = new class extends EventHandler {
  on = 'ready';

  invoke() {
    console.log('Ready!');
  }
}