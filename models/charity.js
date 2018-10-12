// done
const mongoose = require('mongoose')

const Charity = mongoose.model('Charity', {
    name: String,
    description: String,
});

module.exports = Charity

/*
// ROPO
const mongoose = require('mongoose')

const Review = mongoose.model('Review', {
    title: String,
    description: String,
    movieTitle: String,
    movieId: { 
        type: String, required: true 
    }

});

module.exports = Review
*/