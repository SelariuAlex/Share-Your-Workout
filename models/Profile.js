const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  gym: {
    type: String
  },
  location: {
    type: String
  },
  style: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  workout: [
    {
      title: {
        type: String,
        required: true
      },
      exersise: {
        type: String,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
