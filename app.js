const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const charities = require("./controllers/charities");
const donations = require("./controllers/donations");

if (!process.env.PORT) {
    require('dotenv').config()
}

const Charity = require('./models/charity');
const Donation = require('./models/donation');

const exphbs = require('express-handlebars');

app.use(methodOverride('_method'))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// MONGOOSE STUFF
const mongoose = require('mongoose');

// Connect to the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/contractor-project', {useNewUrlParser: true})
.then(() => {
    console.log("Connected to DB");
})
.catch( err => {
    throw err;
})

// ROUTES
charities(app);
donations(app);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(express.static('public'))

module.exports = app;
