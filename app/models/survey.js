
const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

const surveySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  responses: [responseSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Survey', surveySchema)
