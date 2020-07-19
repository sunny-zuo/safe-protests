# Safe Protests Server

### /add_protest (POST)

> Add a protest to the database. Takes a JSON input with the following keys: 
> 
> ['name', 'time', 'description', 'organizer', 'location']
> 
> Response: Status code 200 on success, request body is JSON with a 'success' Boolean and a 'msg' response message.


### /get_protests (GET)

> Gets a list of protests. Can be used with no input, or a query string that specifies the page number (page=1). Each page contains 10 protests, sorted by date added.
> 
> Response: Status code 200 on success, response body is JSON with an array of every protest inside the data key and a 'success' Boolean. The keys for each protest object are:
> 
> ['_id', 'name', 'time', 'description', 'organizer', 'location', 'status', 'protestorCount']

### /join_protest (POST)

> Join an existing protest, by _id. Takes a JSON input with the 'username' key and 'protestID' key.
> 
> Response: Status code 200 on success, request body is JSON with a 'success' Boolean and a 'msg' response message.