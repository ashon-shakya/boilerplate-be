const express = require("express");
const config = require("../../config/config");
const { getTask } = require("../controllers/taskControllers");

const router = express.Router();

router.get("", getTask);

module.exports = router;
