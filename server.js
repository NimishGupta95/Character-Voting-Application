var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');

var app = express();
var server = http.createServer(app);

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), function() {
	console.log('Express Server Is Listening At Port', app.get('port'));
});