# Safe Protests Server

### Endpoints

> **/add_protest** (POST)
> 
> Add a protest to the database. Takes a JSON input with the following keys: 
> 
> ['name', 'time', 'description', 'organizer', 'location']
> 
> Response: Status code 200 on success, request body is JSON with a 'success' Boolean and a 'msg' response message.