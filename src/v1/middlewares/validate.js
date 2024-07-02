// middleware/validate.js
const httpStatus = require("http-status");
const { createResponseObject } = require("../utils/response");

const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(httpStatus.BAD_REQUEST).json(
                createResponseObject("error", error.details[0].message)
            );
        } else {
            next();
        }
    };
};

module.exports = validate;
