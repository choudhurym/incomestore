'use strict';

module.exports = (function () {
    function getUsersAsync() {
        return new Promise((resolve, reject) => {
            if(Math.random() <= 0.01) {
                return reject(new Error('Cannot connect to the database.'));
            }

            // simulate a processing time of 1 second
            setTimeout(function () {
                resolve([{
                        username: 'johndoe',
                        firstName: 'John',
                        lastName: 'Doe'
                    },
                    {
                        username: 'zachguy',
                        firstName: 'Zachary',
                        lastName: 'Kong'
                    }
                ]);
            }, 1000);
        });
    }

    return {
        getUsersAsync
    };
})();