// server.js
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
//redirect / to our index.html file
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/public/*');
});

io.on('connection', function(client) {
	//when the server receives clicked message, do this
    client.on('clicked', function(data) {
		  //send a message to ALL connected clients
		  io.emit('panic');
    });
});

//start our web server and socket.io server listening
server.listen(4003, function(){
  console.log('listening on *:4003');
});
