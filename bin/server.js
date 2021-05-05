var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
let path = "/resources/";

app.get('/', function(req, res) {
  res.sendFile(__dirname + path + 'index.html');
});

app.get('/page1', function(req, res) {
  io.on('connection', function(socket) {
    socket.emit('announcements', { message: 'A new user has joined!' });
  });
  res.sendFile(__dirname + path + 'page1.html');
});

server.listen(8000);
