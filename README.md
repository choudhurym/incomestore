# Income Store Interview

## Introduction
* This interview consists of several sections that need to be programmed to have a very basic functional web app.
* The estimated time to finish this exercise is **one hour**. However, feel free to take longer as it is not timed.
* Some links were provided below to help you with finding resources.
* It might be worth looking into [ES6 async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) if you're not familiar with it already.
* It is recommended to use Google Chrome with this exercise. However, feel free to use the browser of your choice.
* I also use Visual Studio Code as my IDE. If you have not used it before, I highly recommend it. It's beautiful.

## Dependencies
* Node.js (v10.x)

## Installation
Extract the ZIP archive, `cd` into the directory and run `npm install` followed by `npm run start-dev`. This will run the Server and Browser Sync for you using gulp. You can access the server at [http://localhost:8000](http://localhost:8000) if the browser is not automatically started for you.

Any changes made to the files further on, will cause a restart to the server (if necessary) and will refresh the browser for you, respectively.

## Exercise Questions
You are required to modify **two** functions.

The first function can be found in `./routes/index.js` at line 14 with further explanation on what's needed. The goal here is to send usable data to the client. Make sure to send it as JSON. You can find more info on a function called `Response.json()` that might be useful. Of course, you can use whatever you want as long as it works.

The second function is responsible for displaying the data requested on the browser. It can be found in `./public/js/main.js` on line 22. The code that does error handling has already been written for you, and will work correctly as long as the `api` function above sends the correct error status.

Note: the structure of the data returned from the simulated database can be found in `./src/db/Users.js`. You will want to concatenate `user.firstName` and `user.lastName` separated by a space when displaying the data on the table. You can do that on the server or client side. Your choice.

## Useful Links
### Official Documentation
* [Node.js Documentation](https://nodejs.org/dist/latest-v10.x/docs/api/)
* [jQuery Documentation](https://api.jquery.com/)
* [Express Documentation](https://expressjs.com/en/4x/api.html)

### Stack Overflow
* [Adding rows to table using jQuery](https://stackoverflow.com/questions/10851527/adding-rows-to-tbody-of-a-table-using-jquery)

Thanks. If you have any questions please feel free to reach out to me on cabounegm@incomestore.com.
