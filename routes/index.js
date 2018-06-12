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

    // Get the list of users
    const users = await Users.getUsersAsync();

    res.end(); // change this to your code
});

module.exports = router;