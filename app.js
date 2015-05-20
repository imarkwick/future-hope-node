var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require('fs');

var mongo = require('mongodb');
var monk = require('monk');
var dbs = process.env.MONGOLAB_URI || 'localhost:27017/futurehope';
var db = monk(dbs);

var Tables = require('./lib/database');
var tables = new Tables();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ 
  secret: "aloe",
  resave: false,
  saveUninitialized: true
}));

app.use(function(req, res, next) {
  req.db = db;
  next();
});

// adding app controllers
fs.readdirSync('./controllers').forEach(function(file) {
  if(file.substr(-3) == '.js') {
    route = require('./controllers/' + file);
    route.controller(app, tables);
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
