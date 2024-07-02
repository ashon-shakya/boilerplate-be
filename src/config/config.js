const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 8100;
const env = process.env.NODE_ENV || "development";
const mongoose = {
    url: process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/mongo-db",
    options: {
        // mongoose options with auth
        user: process.env.MONGO_USER || "",
        pass: process.env.MONGO_PASS || "",
        authSource: process.env.AUTH_SOURCE || "admin",
    },
};

module.exports = {
    port,
    env,
    mongoose: mongoose,
};
