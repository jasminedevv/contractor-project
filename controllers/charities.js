// done
const Charity = require('../models/charity');
const Donation = require('../models/donation');

module.exports = (app) => {

  // VIEW CREATE FORM
  app.get('/charities/new', (req, res) => {
      res.render('charities-new');
      console.log(req.params.movieId);
    })

    // VIEW REVIEWS INDEX
  app.get('/', (req, res) => {
    console.log("I ran");
      Charity.find( function(err, charities) {
        res.render('index', {charities: charities});
      })
    })

  // app.get('/charities', (req, res) => {
  //   Charity.findById(req.params.id).then((charity) => {
  //     Donation.find({charityId: req.params.id}).then((donations) => {
  //       res.render('index', { charity: charity, donations: donations })
  //     })
  //   }).catch((err) => {
  //     console.log(err.message);
  //   })
  // })
    
  // EDIT ONE REVIEW
  app.get('/charities/:id/edit', function (req, res) {
      Charity.findById(req.params.id, function(err, charity) {
        res.render('charity-edit', {charity: charity});
      })
    })
    
    app.get('/charities/', (req, res) => {
      res.redirect("/");
    })

  // SHOW
  app.get('/charities/:id', (req, res) => {
    Charity.findById(req.params.id).then((charity) => {
      Donation.find({charityId: req.params.id}).then((donations) => {
        res.render('charity-show', { charity: charity, donations: donations })
      })
    }).catch((err) => {
      console.log(err.message);
    })
  })
    
  // UPDATE
  app.put('/charities/:id', (req, res) => {
    console.log("UPDATE charity")
    Charity.findByIdAndUpdate(req.params.id, req.body)
      .then(charity => {
        res.redirect('/');
      })
      .catch(err => {
        console.log(err.message)
      })
  })
    
  // DELETE
  // workaround lmaooooo
  app.get('/charities/:id/delete', function (req, res) {
    console.log("DELETE charity")
    Charity.findByIdAndRemove(req.params.id).then((review) => {
      res.redirect('/');
    }).catch((err) => {
      console.log(err.message);
    })
  })
    
  // CREATE
  app.post('/charities', (req, res) => {
    console.log(req.body);
    Charity.create(req.body)
        .then((charity) => {
            res.redirect(`/charities/${charity._id}`);
        })
        .catch((err) => {
            console.log(err.message)
    })
  });
}