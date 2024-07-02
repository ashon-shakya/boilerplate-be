const httpStatus = require("http-status");
const { taskService } = require("../services");

const getTask = (req, res) => {
    try {
        taskService
            .getTask()
            .then((tasks) => {
                const resObj = {
                    success: true,
                    message: "Tasks Found",
                    data: tasks,
                };
                return res.status(httpStatus.OK).json(resObj);
            })
            .catch((err) => {
                console.error(err);
                const errorObj = {
                    success: false,
                    message: "Error fetching Tasks!",
                };
                return res
                    .status(httpStatus.INTERNAL_SERVER_ERROR)
                    .json(errorObj);
            });
    } catch (err) {
        console.error(err);
        const errorObj = {
            success: false,
            message: "Error fetching Tasks!",
        };
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json(errorObj);
    }
};

module.exports = { getTask };
