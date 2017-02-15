/**
 * Created by dev on 2017-02-15.
 */

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var uri = "mongodb://db_user:db_user@ds149069.mlab.com:49069/company";
mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected successfully to media db');// we're connected!
});

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var customers = require('./routes/customer')(app);

var port = 5200;

app.listen(port, function(err){
    console.log('running server on port ' + port);
});