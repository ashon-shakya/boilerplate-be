const express = require("express");
const config = require("./config/config");
const mongoose = require("mongoose");
const httpStatus = require("http-status");

// router with version
const routerV1 = require("./v1/routes");

// Start Express App
const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Check Uptime
 */
app.get("/", (req, res) => {
    const data = {
        message:
            "Welcome to Rebbtech Express API Boilerplate! This has been hosted using AWS",
        status: "OK",
        date: new Date(),
    };
    res.status(httpStatus.OK).send(data);
});

app.get("/health", (req, res) => {
    const data = {
        uptime: process.uptime(),
        database:
            mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
        message: "Ok",
        date: new Date(),
    };

    res.status(httpStatus.OK).send(data);
});

/**
 * Routes API with Version
 */

// v1 api
app.use("/api/v1", routerV1);

// Connection to MongoDB
// Listening to port

mongoose
    .connect(config.mongoose.url, config.mongoose.options)
    .then(() => {
        console.log(`Connected to MongoDB: ${config.mongoose.url}`);
        app.listen(config.port, () => {
            console.log(`Listening at port ${config.port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
