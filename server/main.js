/**
 * Created by OriolGresa on 2/3/17.
 */

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var messages = [{
	author: "Oriol",
	text: "Hola"
}];


app.use(express.static('public'));

io.on('connection', function (socket) {
   console.log('Alguien se ha conectado con Sockets');
   socket.emit('messages', messages);

   socket.on('newmessage', function(data){
   	messages.push(data);
   	io.sockets.emit('messages', messages);
   });
});

server.listen(3010, function () {
    console.log("servidor corriendo en http://192.168.1.107:3010");
});