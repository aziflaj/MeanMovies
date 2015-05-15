var express = require('express'),
    app = express(),
    path = require('path'),

    //database dependencies
    monk = require('monk');


var db = monk('localhost:27017/movies');
var movies = db.get('movieCollection');

app.use('/', express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/api/movies', function (req, res) {
    movies.find({}, function (err, docs) {
        if (err == null) {
            res.json(docs);
        } else {
            console.log(err);
        }
    });
});

app.get('/api/movies/:id', function (req, res) {

    movies.find({"_id": req.params.id}, function (err, docs) {
        if (err == null) {
            res.json(docs);
        } else {
            console.log(err);
        }
    });
    
});

app.listen(3000, function() {
	console.log("Server ready. Listening on port 3000");
});