var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>Shubhangi Modi is a full stack developer! Node JS Developer</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({firstname: 'Shubhangi', lastname: 'Modi'});
});

app.get('/person/:id', function(req, res) {
    res.send(`<h1> ${req.params.id} </h1>`);
});

app.listen(port);