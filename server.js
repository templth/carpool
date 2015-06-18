require('./config/db/connect');
var socket_io = require('socket.io');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./app/routes');
var port = process.env.PORT || 8080

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

var server = http.Server(app);
var io = socket_io(server);


io.on('connection', function (socket) {
    console.log('Client connected');

    // socket.on('newUser', function(message) {
        
    // });
    socket.on('message', function(message) {
        console.log('Received message:', message);
        socket.broadcast.emit('message', message);
    });

    socket.on('disconnect', function(){
        console.log('Client disconnected');
    });
});


server.listen(port);

exports = module.exports = app