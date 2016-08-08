var express = require('express');
var app = express();

// create an http server over the express "app"
var http = require("http").Server(app);
var io = require("socket.io")(http);

var path = require("path");

app.get('/', function (req, res) {
    res.sendFile(path.normalize(__dirname + "/../app/index.html"));
});

app.use(express.static('app'));
app.use("/bower_components", express.static('bower_components'));

io.on("connection", function(socket){
    console.log("a user connected");
    socket.on("chat_message", function(msg){
        console.log("we have chat message: "+msg)
        socket.broadcast.emit("chat_message", msg);
    })
})  

http.listen(3000, function () {
    console.log('listening on *:3000');
});

