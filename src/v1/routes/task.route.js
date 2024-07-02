const express = require("express");
const router = express.Router();

// configuration file
const config = require("../../config/config");
const {
    getTask,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
} = require("../controllers/taskControllers");

// validate middleware
const validate = require("../middlewares/validate");
const {
    createTaskSchema,
    updateTaskSchema,
} = require("../schemas/task.schema");

router.get("/", getTask);
router.get("/:id", getTaskById);
router.post("/", validate(createTaskSchema), createTask);
router.patch("/:id", validate(updateTaskSchema), updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
