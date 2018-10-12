const Donation = require('../models/donation')

module.exports = (app) => {
// CREATE Comment
    app.post('/charities/donations', (req, res) => {
      console.log("incoming request with content:", req.body);
      Donation.create(req.body).then(donation => {
        console.log("donation registered with content: "  ,req.body);
        res.status(200).send({ donation: donation });
        console.log("I have responded with content: ", donation);
      }).catch((err) => {
        res.status(400).send({ err: err })
      })
    })

    // DELETE
    app.delete('/charities/donations/:id', function (req, res) {
        console.log("DELETE donation");
        Donation.findByIdAndRemove(req.params.id).then((donation) => {
        res.redirect(`/charities/${donation.charityId}`);
        }).catch((err) => {
        console.log(err.message);
        })
    })
  }


// ROPO CODE
/*
const Comment = require('../models/comment')

module.exports = (app) => {
// CREATE Comment
    app.post('/reviews/comments', (req, res) => {
      console.log("incoming request with content:", req.body);
      Comment.create(req.body).then(comment => {
        console.log("comment registered with content: "  ,req.body);
        res.status(200).send({ comment: comment });
        console.log("I have responded with content: ", comment);
      }).catch((err) => {
        res.status(400).send({ err: err })
      })
    })

    // DELETE
    app.delete('/reviews/comments/:id', function (req, res) {
        console.log("DELETE comment");
        Comment.findByIdAndRemove(req.params.id).then((comment) => {
        res.redirect(`/reviews/${comment.reviewId}`);
        }).catch((err) => {
        console.log(err.message);
        })
    })
  }
  */