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

const getTaskById = async (id) => {
    return new Promise((resolve, reject) => {
        Task.findById(id)
            .then((task) => {
                if (task) {
                    resolve(task);
                } else {
                    reject(new Error("Task Not Found!"));
                }
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const createTask = async (taskData) => {
    return new Promise((resolve, reject) => {
        const task = new Task(taskData);
        task.save()
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const updateTaskById = async (id, taskData) => {
    return new Promise((resolve, reject) => {
        Task.findById(id)
            .then((task) => {
                if (taskData.title != null) {
                    task.title = taskData.title;
                }
                if (taskData.description != null) {
                    task.description = taskData.description;
                }
                if (taskData.completed != null) {
                    task.completed = taskData.completed;
                }

                task.save()
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const deleteTaskById = async (id) => {
    return new Promise((resolve, reject) => {
        Task.findByIdAndDelete(id)
            .then((task) => {
                resolve({ message: "Task Deleted!" });
            })
            .catch((err) => {
                reject(err);
            });
    });
};

module.exports = {
    getTask,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById,
};
