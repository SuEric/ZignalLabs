var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  }
}, {
  id: false,
  strict: true,
  timestamps: true,
});

const User = mongoose.model('User', UserSchema);

module.exports = { UserSchema, User };