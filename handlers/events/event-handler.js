module.exports = class EventHandler {
  on = '';

  invoke(...args) {
    throw new TypeError('Event not implemented.')
  }
}