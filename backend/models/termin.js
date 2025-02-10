const mongoose = require('mongoose');

const terminSchema = new mongoose.Schema({
 email: { type: String, ref:'User', required: true }, 
 date: { type: Date, required: true }, 
 time: { type: String, required: true }
});
