var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

//: 76
app.set('view engine','ejs');

//L : 75
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request Url: ', req.url);
    next();
});

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/person/:id', function(req, res) {
    res.render('person', { ID : req.params.id, Fruits: req.query.fruits});
});

app.get('/api', function(req, res) {
    res.json({firstname: 'Shubhangi', lastname: 'Modi'});
});

app.get('/person/:id', function(req, res) {
    res.send(`<h1> ${req.params.id} </h1>`);
});

app.listen(port);