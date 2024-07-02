const Joi = require("joi");

const createTaskSchema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
    completed: Joi.boolean().optional(),
});

const updateTaskSchema = Joi.object({
    title: Joi.string().min(3).optional(),
    description: Joi.string().min(3).optional(),
    completed: Joi.boolean().optional(),
});

module.exports = {
    createTaskSchema,
    updateTaskSchema,
};
