# Safe Protests Server

## /add_protest (POST)

Add a protest to the database. Takes a JSON input with the following keys: ['name', 'time', 'description', 'organizer', 'location']

Sample input:
```json
{
	"name": "yeet",
	"time": "2020-07-18",
	"description": "desc",
	"organizer": "bob",
	"location": "Canada"
}
```

Sample Response:
```json
{
  "success": true,
  "msg": "Success"
}
```

## /get_protests (GET)

Gets a list of protests. Can be used with no input, or a query string that specifies the page number (page=1). Each page contains 10 protests, sorted by date added.

Sample response:
```json
{
  "data": [
    {
      "_id": "5f137aa124ca6dae50c13b06",
      "name": "yeet",
      "time": "1990-06-20",
      "description": "789",
      "organizer": "456",
      "location": "123",
      "status": "active",
      "protestorCount": 1
    },
    {
      "_id": "5f1374b13e9095a9f0a88131",
      "name": "test39",
      "time": "2020-06-20",
      "description": "dfldf",
      "organizer": "asddfs",
      "location": "dfs9",
      "status": "active",
      "protestorCount": 3
    }
  ],
  "success": true
}
```

## /get_protest (GET)

Gets the full information for a singular protest. Requires a query string that specifies the protestID, which can be obtained from the _id key in /get_protests (ex: protestID=5f137aa124ca6dae50c13b06)

Sample response:

```json
{
  "_id": "5f137aa124ca6dae50c13b06",
  "name": "yeet",
  "time": "1990-06-20",
  "description": "789",
  "organizer": "456",
  "location": "123",
  "status": "active",
  "protestors": [
    "456"
  ],
  "protestorCount": 1,
  "success": true
}
```

## /join_protest (POST)

Join an existing protest, by _id. Takes a JSON input with the 'username' key and 'protestID' key.

Sample input:

```json
{
	"username": "new protestor",
	"protestID": "5f1374b13e9095a9f0a88131"
}
```

Sample response:

```json
{
  "success": true,
  "msg": "Success"
}
```