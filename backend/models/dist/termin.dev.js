"use strict";

var mongoose = require('mongoose');

var terminSchema = new mongoose.Schema({
  email: {
    type: String,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});
//# sourceMappingURL=termin.dev.js.map
