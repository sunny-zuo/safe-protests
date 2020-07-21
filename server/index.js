const database = require("./database");
const express = require("express");
const cors = require("cors");
const app = express();
const twilio = require("twilio");

// Set up CORS (no params enables all cors requests) and JSON handling middleware
app.use(cors());
app.use(express.json());

//twilio requirements --texting
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

//Twilio Text
app.get("/send_text", (req, res) => {
	//Get Variables, passed via query string
	const { recipient, textmessage } = req.query;
	//Send Text
	client.messages
		.create({
			body: textmessage,
			to: "+1" + recipient,
			from: "+15097742927",
		})
		.then((message) => console.log(message.body))
		.then(res.status(200).send({ success: true }))
		.catch(err => {
			console.error(err);
			res.status(503).send({ success: false, msg: "Internal Server Error" });
		});
});

// Endpoint for adding a new protest to the database
app.post("/add_protest", function (req, res, next) {
	// check if input is JSON
	if (req.is("application/json")) {
		next();
	} else {
		res.status(403).send("Invalid request");
	}
});
app.post("/add_protest", function (req, res) {
	let success = false;
	let resMsg = "Request body did not contain all needed information";
	let resCode = 403;

	let json = req.body;
	// requires a json input with the name, time, description, organizer and location keys
	if (
		json.name &&
		json.time &&
		json.description &&
		json.organizer &&
		json.location
	) {
		try {
			database.insertProtest(req.body);
			success = true;
			resMsg = "Success";
			resCode = 200;
		} catch (err) {
			console.log(`Error inserting: ${err}`);
			success = false;
			resMsg = "Internal Server Error";
			resCode = "503";
		}
	}

	res.status(resCode).send({ success: success, msg: resMsg });
});

// Endpoint for getting a list of protests. A query string for page can be given to see other pages (each page has 10 protests)
app.get("/get_protests", async (req, res) => {
	let skip = 0;
	// Set the number of documents to skip in the db request for pagination if it exists
	if (req.query.page) {
		skip = req.query.page * 10 - 10; // each page contains 10 protests and thus will skip 10 more per page
	}

	try {
		let data = await database.getProtests(skip);
		// Count the number of protestors to add a protestorCount field to the response
		for (let i = 0; i < Object.keys(data).length; i++) {
			data[i].protestorCount = Object.keys(data[i].protestors).length;
			delete data[i].protestors; // delete the list of names as it won't be needed in this response
		}
		res.status(200).send({ data: data, success: true });
	} catch (err) {
		res.status(503).send({ success: false, msg: "Internal Server Error" });
	}
});

// Endpoint for getting the full information about a specific protest, by the protestID paramter in the query string (_id)
app.get("/get_protest", async (req, res) => {
	if (req.query.protestID) {
		try {
			let data = await database.getProtest(req.query.protestID);
			data.protestorCount = Object.keys(data.protestors).length;
			data.success = true;
			res.status(200).send(data);
		} catch (err) {
			res.status(503).send({ success: false, msg: "Internal Server Error" });
		}
	} else {
		res.status(403).send("Request body did not contain all needed information");
	}
});

// Endpoint for joining a protest. Requires JSON input with the protestID (_id) and username keys
app.post("/join_protest", function (req, res, next) {
	// check if input is JSON
	if (req.is("application/json")) {
		next();
	} else {
		res.status(403).send("Invalid request");
	}
});
app.post("/join_protest", function (req, res) {
	let json = req.body;
	if (json.protestID && json.username) {
		try {
			database.addProtestUser(json.protestID, json.username);
			res.status(200).send({ success: true, msg: "Success" });
		} catch (err) {
			res.status(503).send({ success: false, msg: "Internal Server Error" });
		}
	} else {
		res.status(403).send("No name was given");
	}
});

// Endpoint for adding a new post to a protest. Requires JSON input with the protestID, username, title and body keys
app.post("/add_post", function (req, res, next) {
	// check if input is JSON
	if (req.is("application/json")) {
		next();
	} else {
		res.status(403).send("Invalid request");
	}
});
app.post("/add_post", function (req, res) {
	let json = req.body;
	if (json.protestID && json.username && json.title && json.body) {
		const image = json.image ? json.image : null; // if no image is given, make it null
		// Add post using the given paramters. Also includes a date field based on the current server timestamp
		database.addPost(
			json.protestID,
			json.username,
			json.title,
			json.body,
			Date.now(),
			image
		);
		res.status(200).send({ success: true, msg: "Success" });
	} else {
		res.status(403).send("Request body did not contain all needed information");
	}
});

app.listen(8000);
console.log("Server listening on port 8000");
