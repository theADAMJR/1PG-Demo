const Guild = require('./models/guild');

module.exports = new class Guilds {
  async get(id) {
    return await Guild.findById(id)
      ?? await Guild.create({ _id: id });
  }
}