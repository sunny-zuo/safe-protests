const database = require('./database')
const express = require('express');
const app = express();

//database.connect();

app.get('*', function(req, res) {
    console.log(req.path);
});

app.listen(8000);

database.insertProtest({ test: 1, test2: 'hello world'});