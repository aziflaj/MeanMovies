var express = require('express'),
    app = express(),
    path = require('path'),

    //database dependencies
    mongodb = require('mongodb'),
    monk = require('monk');


var db = monk('localhost:27017/test');
var people = db.get('people');

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/test', function(req, res) {
    res.json({
        status_code: 200,
        status: 'OK',
        content: {
            type: 'JSON',
            message: 'Working!'
        }
    })
});

app.get('/api/people', function (req, res) {
    people.find({}, function (err, docs){
        if (err == null) {
            var result = docs;
            res.json(result);

        } else {
            console.log("erros!");
        }
    });
});

app.listen(3000, function() {
	console.log("Server ready. Listening on port 3000");
});