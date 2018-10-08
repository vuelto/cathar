const express = require('express');
const parser = require('body-parser');
const config = require('./config');
const ajv = new (require('ajv'))();

var app = express();
var jsonp = parser.json();
app.listen(config.app.port);

// get all caths
// TODO! rate limit this call by ip address
app.get('/api/cath', function(req, res){
    res.json([
        { "xpath": "xpath 1", 
            "text": "foo bar", 
            "url": "https://foo.bar" },
        { "xpath": "xpath 2", 
            "text": "foo bar baz", 
            "url": "http://bar.baz" }]);
});

// get a specific cath
// TODO! rate limit this call by ip address
app.get('/api/cath/:id', function(req, res){
    res.json( 
        { "xpath": "xpath 1", 
            "text": "foo bar" });
});

// create a new user
// TODO! rate limit this call by ip address
app.post('/api/user', jsonp, function(req, res){
    if (ajv.validate(config.schema.user.create, req.body)){
        res.send('good');
    }
    else {
        res.status(400).send('schema validation failed');
    }
});

// recover password via email
// TODO! rate limit this call by ip address
app.get('/api/user/password/:email', function(req, res){
    res.send('password recovery email sent');
});

// update password
// TODO! rate limit this call by ip address
app.put('/api/user/password', jsonp, function(req, res){
    if (ajv.validate(config.schema.user.password, req.body)){
        res.send('good');
    }
    else {
        res.status(400).send('schema validation failed');
    }
});

// create a new cath
// TODO! rate limit this call by ip address
app.post('/api/cath', jsonp, function(req, res){
    if (ajv.validate(config.schema.cath.create, req.body)){
        res.send('good');
    }
    else {
        res.status(400).send('schema validation failed');
    }
});
