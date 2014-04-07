
/**
 * Module dependencies.
 */

var express = require('express.io');
var path = require('path');
var app = express().http().io();

// all environments
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.session({secret:"Mylove"}));
// development only
var route=require("./routes/index")(app);
app.listen(8000);
