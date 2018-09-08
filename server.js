var express = require ("express");
var bodyParser = require ("body-parser");
var logger = require ("morgan");
var mongoose = require ("mongoose");

//promised-based http library
var axios = require ("axios");
var cheerios = require ("cheerio");


//require all models
var db = require("./models");

var PORT = 3000;

//Initialize Express
var app = express();


app.use(logger("dev"));

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({extended: ture}));

// Use express.static to serve the public folder as a static directory
app.use(express.statick("public"));

//Connection to Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);




// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  