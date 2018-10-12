// done
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Donation = mongoose.model('Donation', {
  name: String,
  ammount: Number,
  charityId: { type: Schema.Types.ObjectId, ref: 'Charity' }
});

module.exports = Donation
/*
// ROPO
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = mongoose.model('Comment', {
  title: String,
  content: String,
  reviewId: { type: Schema.Types.ObjectId, ref: 'Review' }
});

module.exports = Comment
*/
