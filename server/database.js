const dotenv = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const url = `mongodb+srv://admin:${process.env.DB_PASSWORD}@safeprotests.yx0su.mongodb.net/db?retryWrites=true&w=majority`;

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function insertProtest(obj) {
    client.connect(err => {
        const collection = client.db("test").collection("protests");
        collection.insertOne(obj, function(err, res) {
            if (err) throw err;
            console.log(`${JSON.stringify(obj)} inserted`);
            client.close();
        });
    })
}

exports.insertProtest = insertProtest;