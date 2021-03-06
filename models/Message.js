const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Message = new mongoose.Schema({
  text: {type: String, required: true},
  user: {type: ObjectId, ref: 'User'},
  location: {type: ObjectId, ref: 'Location'},
})

module.exports = mongoose.model('Message', Message);
