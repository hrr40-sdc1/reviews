const mongoose = require('mongoose');
const db = require('./index.js');

const schema = new mongoose.Schema({
  houseId: Number,
  userId: Number,
  userName: String,
  userImage: String,
  comment: String,
  dateCreated: Date,
  starRatings: {
    accuracy: {
      type: Number
    },
    communication: {
      type: Number
    },
    cleanliness: {
      type: Number
    },
    location: {
      type: Number
    },
    checkIn: {
      type: Number
    },
    value: {
      type: Number
    }
  },
  response: {
    name: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    comment: {
      type: String,
      default: ''
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
})

const Review = mongoose.model('Review', schema);


module.exports = Review;