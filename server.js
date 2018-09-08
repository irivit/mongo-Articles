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
mongoose.connect("mongodb://localhost/week18Populater");


//tengo que crear 4 rutas 

//ruta 1: capturar info de la pag y llenar la base de datos
//ruta 2: mostrar todos los articulos
//ruta 3: mostrar articulos salvados
//ruta 4: notas por aticulos


