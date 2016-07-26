var express = require('express');
var app = express();

var http = require('http').Server(app);
var path = require("path");

app.get('/', function (req, res) {
    res.sendFile(path.normalize(__dirname + "/../app/index.html"));
});

app.use(express.static('app'));
app.use("/bower_components", express.static('bower_components'));

http.listen(3000, function () {
    console.log('listening on *:3000');
});