'use strict';

const express = require('express');
const { Users } = require('../src/db');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Index'
    });
});

router.get('/api/users', async (req, res, next) => {
    /**
     * 1. Add a try-catch block, to catch whenever the getUsersAsync()
     *    throws an exception. The current code throws randomly, to
     *    simulate a call to a closed connection to the database.
     * 2. On success, send back the users to the client as JSON. You can
     *    modify the structure of the object before sending it
     *    back (if necessary).
     * 3. On error, send a 400 status back to the client.
     */
    var message;
	message = document.getElementById("populate-users");
    message.innerHTML = "";
    res = document.getElementById("table-users").value;
	try{
		if(res == "") throw "is empty"; 
		x = Users.getUsersAsync(res);
		if(x == "Username"){
			var myJSON = JSON.stringify(x);
			window.location = "Users.js ? x=" + myJSON;
		}throw "does not exist";
	 }
	 catch(err)
	 {
		message.innerHTML = "404: Page not found" + err;	 
	 }

    // Get the list of users
    const users = await Users.getUsersAsync();

    res.end(); // change this to your code
});

module.exports = router;
