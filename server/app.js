var express = require('express');
var app = express();
var db = require('db/db')

app.get('/', function (req, res) {
    res.send('Hello The Fucking World');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    db.connect()
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})