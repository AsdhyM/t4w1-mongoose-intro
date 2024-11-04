// Purpose:
// Configure the server, eg.
// - routes
// - middleware
// - CORS
// - debug logger setups
// - connections to databases
// - connections to file storage

const express = require("express");
const app = express();

// Server app configuration goes here
// middleware, routes, etc

app.use(express.json());

// app.verb(path, callback);
app.get("/", (request, response) => {
    // response.send("Hello, wold!");

    response.json({
        message:"Hello world!"
    });
});

const PostController = require("./controllers/PostController.js");
app.use("/posts", PostController);

// Server app configuratin is finished by this point

// Export the app so that other files can control when the server
// starts and stops
module.exports = {
    app
}