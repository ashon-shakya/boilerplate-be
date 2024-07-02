const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const taskSchema = new mongoose.Schema({
    title: { type: String, unique: true, required: true },
    description: { type: String },
    completed: { type: Boolean },
});

// add plugin that converts mongoose to json
taskSchema.plugin(toJSON);
taskSchema.plugin(paginate);

/**
 * @typedef task
 */
const task = mongoose.model("task", taskSchema);

module.exports = task;
