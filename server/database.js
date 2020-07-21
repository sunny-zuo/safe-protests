const dotenv = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const url = process.env.DB_URL;

// Create a new MongoClient
const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

let db = null;

// Connect to the database upon init and set the db variable
mongoClient.connect((err, client) => {
    if (err) { console.error(err) };
    db = client.db("database");
})

async function insertProtest(obj) {
    // Take the user input and add default attributes not included from input (set status to active, add the organizer to the protestor list and create the initial post)
    let data = obj;
    data.status = "active";
    data.protestors = [data.organizer];
    data.posts = [{
        username: data.organizer,
        title: 'Protest created',
        body: `Added ${data.name} to Safe Protests!`,
        date: Date.now(),
        image: null
    }]

    // Get the protests collection and insert our new protest document
    const collection = db.collection("protests");
    collection.insertOne(data, function (err, res) {
        if (err) throw err;
    });   
}

async function getProtests(page = 0) {
    return new Promise((resolve, reject) => {
        const collection = db.collection("protests");
        // Gets a list of protests. project() is used to specify the fields requested, we skip() the given number of entries, and sort using _id: -1 for newest to oldest
        collection.find().project({ _id: 1, name: 1, time: 1, description: 1, organizer: 1, location: 1, status: 1, protestors: 1 }).skip(page).sort({ _id: -1 }).limit(10).toArray(function (err, res) {
            if (err) reject(err);
            resolve(res);
        });
    });
}

async function getProtest(protestID) {
    return new Promise((resolve, reject) => {
        const collection = db.collection("protests");
        // Finds the first protest that matches the given ID. Uses the ObjectID import to format _id properly
        collection.findOne({ _id: ObjectID(protestID) }, function (err, res) {
            if (err) reject(err);
            resolve(res);
        });
    });
}

async function addProtestUser(protestID, username) {
    const collection = db.collection("protests");
    // Update the protest entry obtained by _id by pushing the name of the protestor into the protestors array
    collection.updateOne({ _id: ObjectID(protestID) }, { $push: { protestors: username }}, function(err, res) {
        if (err) throw err;
    });
}

async function addPost(protestID, username, title, body, date, image) {
    const postBody = {
        username: username,
        title: title,
        body: body,
        date: date,
        image: image
    }
    const collection = db.collection("protests");
    // Update the protest entry obtained by _id by pushing the data of the new post into the posts array
    collection.updateOne({ _id: ObjectID(protestID) }, { $push: { posts: postBody} }, function (err, res) {
        if (err) throw err;
    });
}

exports.addPost = addPost;
exports.addProtestUser = addProtestUser;
exports.insertProtest = insertProtest;
exports.getProtests = getProtests;
exports.getProtest = getProtest;