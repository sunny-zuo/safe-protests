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
        res.status(403).send('Forbidden');
    }
});

app.post('/add_protest', function(req, res) {
    let success = false;
    let resMsg = 'Forbidden';
    let resCode = 403;

    let keys = Object.keys(req.body);
    if (JSON.stringify(keys) === JSON.stringify(['name', 'time', 'description', 'organizer', 'location'])) {
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
        res.status(200).send({data: data, success: true});
    } catch (err) {
        res.status(503).send({success: false, msg: 'Internal Server Error'});
    }
});

app.listen(8000);

console.log("Server listening on port 8000");