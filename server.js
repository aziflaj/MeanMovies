var express = require('express'),
    app = express(),
    path = require('path');

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

app.listen(3000, function() {
	console.log("Server ready. Listening on port 3000");
});