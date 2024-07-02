const httpStatus = require("http-status");
const { taskService } = require("../services");
const { createResponseObject } = require("../utils/response");

const getTask = (req, res) => {
    try {
        taskService
            .getTask()
            .then((tasks) => {
                const resObj = createResponseObject(
                    true,
                    "Tasks Fetched!",
                    tasks
                );
                return res.status(httpStatus.OK).json(resObj);
            })
            .catch((err) => {
                const errorObj = createResponseObject(
                    false,
                    "Error fetching Tasks!"
                );
                return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json(errorObj);
            });
    } catch (err) {
        console.error(err);
        const errorObj = createResponseObject(false, "Error fetching Tasks!");
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorObj);
    }
};

const getTaskById = (req, res) => {
    try {
        taskService
            .getTaskById(req.params.id)
            .then((task) => {
                const resObj = createResponseObject(
                    true,
                    "Task Fetched!",
                    task
                );
                return res.status(httpStatus.OK).json(resObj);
            })
            .catch((err) => {
                console.error(err);

                const errorObj = createResponseObject(
                    false,
                    "Error fetching Task!"
                );
                return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json(errorObj);
            });
    } catch (err) {
        console.error(err);
        const errorObj = createResponseObject(false, "Error fetching Task!");
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorObj);
    }
};

const createTask = (req, res) => {
    try {
        taskService
            .createTask(req.body)
            .then((task) => {
                const resObj = createResponseObject(
                    true,
                    "Task Created!",
                    task
                );
                return res.status(httpStatus.OK).json(resObj);
            })
            .catch((err) => {
                console.error(err);

                const errorObj = createResponseObject(
                    false,
                    "Error Creating Task!"
                );
                return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json(errorObj);
            });
    } catch (err) {
        console.error(err);
        const errorObj = createResponseObject(false, "Error Creating Task!");
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorObj);
    }
};

const updateTask = (req, res) => {
    try {
        taskService
            .updateTaskById(req.params.id, req.body)
            .then((task) => {
                const resObj = createResponseObject(
                    true,
                    "Task Updated!",
                    task
                );
                return res.status(httpStatus.OK).json(resObj);
            })
            .catch((err) => {
                console.error(err);

                const errorObj = createResponseObject(
                    false,
                    "Error Updating Task!"
                );
                return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json(errorObj);
            });
    } catch (err) {
        console.error(err);
        const errorObj = createResponseObject(false, "Error Updating Task!");
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorObj);
    }
};

const deleteTask = (req, res) => {
    try {
        taskService
            .deleteTaskById(req.params.id, req.body)
            .then((data) => {
                const resObj = createResponseObject(true, "Task Deleted!");
                return res.status(httpStatus.OK).json(resObj);
            })
            .catch((err) => {
                console.error(err);

                const errorObj = createResponseObject(
                    false,
                    "Error Deleting Task!"
                );
                return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json(errorObj);
            });
    } catch (err) {
        console.error(err);
        const errorObj = createResponseObject(false, "Error Deleting Task!");
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorObj);
    }
};

module.exports = { getTask, getTaskById, createTask, updateTask, deleteTask };
