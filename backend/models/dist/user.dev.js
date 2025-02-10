"use strict";

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    "default": new mongoose.Types.ObjectId()
  } // Automatisch userId

});
var User = mongoose.model('User', userSchema);
module.exports = User;
//# sourceMappingURL=user.dev.js.map
