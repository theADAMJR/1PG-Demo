const { model, Schema, SchemaTypes, SchemaType } = require('mongoose');

class GeneralModule {
  prefix = '.';
}

module.exports = model('guild', new Schema({
  _id: String,
  general: { type: Object, default: new GeneralModule() }
}));