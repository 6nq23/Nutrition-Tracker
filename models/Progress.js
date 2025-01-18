const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  value: { type: Number, required: true }
});

module.exports = mongoose.model('Progress', progressSchema);
