const database = require('./database')
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/add_protest', function(req, res, next) {
    // check if input is JSON
    if (req.is('application/json')) {
        next();
    } else {
        res.status(403).send('Invalid request');
    }
});

app.post('/add_protest', function(req, res) {
    let success = false;
    let resMsg = 'Request body did not contain all needed information';
    let resCode = 403;

    let json = req.body;
    if (json.name && json.time && json.description && json.organizer && json.location) {
        req.body.status = 'active';
        console.log(req.body);
        try {
            database.insertProtest(req.body);
            success = true;
            resMsg = 'Success';
            resCode = 200;
        } catch (err) {
            console.log(`Error inserting: ${err}`);
            success = false;
            resMsg = 'Internal Server Error';
            resCode = '503'
        }
    }

    res.status(resCode).send({success: success, msg: resMsg});
});

app.get('/get_protests', async (req, res) => {
    let skip = 0;
    if (req.query.page) {
        skip = (req.query.page * 10) - 10 // each page contains 10 protests and thus will skip 10 more per page
    }

    try {
        let data = await database.getProtests(skip);
        for (let i = 0; i < Object.keys(data).length; i++) {
            data[i].protestorCount = Object.keys(data[i].protestors).length;
            delete data[i].protestors;
        }
        res.status(200).send({data: data, success: true});
    } catch (err) {
        res.status(503).send({success: false, msg: 'Internal Server Error'});
    }
});

app.get('/get_protest', async (req, res) => {
    if (req.query.protestID) {
        try {
            let data = await database.getProtest(req.query.protestID);
            data.protestorCount = Object.keys(data.protestors).length;
            data.success = true;
            res.status(200).send(data);
        } catch (err) {
            res.status(503).send({ success: false, msg: 'Internal Server Error' });
        }
    } else {
        res.status(403).send('Request body did not contain all needed information');
    }
});

app.post('/join_protest', function (req, res, next) {
    // check if input is JSON
    if (req.is('application/json')) {
        next();
    } else {
        res.status(403).send('Invalid request');
    }
});

app.post('/join_protest', function (req, res) {
    let json = req.body;
    if (json.protestID && json.username) {
        try {
            database.addProtestUser(json.protestID, json.username);
            res.status(200).send({success: true, msg: 'Success'});
        } catch (err) {
            res.status(503).send({ success: false, msg: 'Internal Server Error' });
        }
    } else {
        res.status(403).send('No name was given');
    }
});

app.post('/add_post', function (req, res, next) {
    // check if input is JSON
    if (req.is('application/json')) {
        next();
    } else {
        res.status(403).send('Invalid request');
    }
});

app.post('/add_post', function (req, res) {
    let json = req.body;
    if (json.protestID && json.username && json.title && json.body) {
        const image = (json.image) ? json.image : null;
        database.addPost(json.protestID, json.username, json.title, json.body, Date.now(), image);
        res.status(200).send({ success: true, msg: 'Success' });
    } else {
        res.status(403).send('Request body did not contain all needed information');
    }
})

app.listen(8000);

console.log("Server listening on port 8000");