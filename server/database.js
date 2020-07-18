const dotenv = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const url = `mongodb+srv://admin:${process.env.DB_PASSWORD}@safeprotests.yx0su.mongodb.net/db?retryWrites=true&w=majority`;

// Create a new MongoClient
const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

let db = null;

mongoClient.connect((err, client) => {
    if (err) { console.error(err) };
    db = client.db("database");
})

async function insertProtest(obj) {
    const collection = db.collection("protests");
    collection.insertOne(obj, function (err, res) {
        if (err) throw err;
        console.log(`${JSON.stringify(obj)} inserted`);
    });   
}

async function getProtests(page = 0) {
    return new Promise((resolve, reject) => {
        const collection = db.collection("protests");
        collection.find().skip(page).sort({ _id: -1 }).limit(10).toArray(function (err, res) {
            if (err) reject(err);
            resolve(res);
        });
    });
}

exports.insertProtest = insertProtest;
exports.getProtests = getProtests;