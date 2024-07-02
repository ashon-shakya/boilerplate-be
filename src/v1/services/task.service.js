const { Task } = require("../models");

/**
 * Get list of tasks
 */

const getTask = async (query = {}, projection = {}) => {
    return new Promise((resolve, reject) => {
        Task.find(query, projection)
            .then((tasks) => {
                if (tasks) {
                    resolve(tasks);
                } else {
                    reject(new Error("Tasks Not Found!"));
                }
            })
            .catch((err) => {
                reject(err);
            });
    });
};

module.exports = {
    getTask,
};
