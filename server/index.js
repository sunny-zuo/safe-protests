const express = require('express');
const app = express();

app.get('*', function(req, res) {
    console.log(req.path);
});

app.listen(8000);