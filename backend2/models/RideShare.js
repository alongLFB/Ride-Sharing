const mongoose = require('mongoose');

const rideShareSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['driver', 'passenger'],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  departure: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  timeRange: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  wechat: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'cancelled'],
    default: 'active'
  }
});

const RideShare = mongoose.model('RideShare', rideShareSchema);
module.exports = RideShare;