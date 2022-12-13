
import Joi from "joi";
import { mongoDbIdRegex } from "../middleware";

const tagValidation = Joi.object({
    name: Joi.string().min(2).required(),
    createdAt: Joi.string(),
    updatedAt: Joi.string()
})
const triggerValidation = Joi.object({
    module_id: Joi.string().required(),
    name: Joi.string().min(2).required(),
    createdAt: Joi.string(),
    updatedAt: Joi.string()
})
const parameterValidation = Joi.object({
    name: Joi.string().min(2).required(),
    type: Joi.string().min(2).required(),
    createdAt: Joi.string(),
    updatedAt: Joi.string()
})

export const newModuleValidation = Joi.object({
    name: Joi.string().min(2).required(),
    description: Joi.string().min(2),
    bg_color: Joi.string().min(2),
    detail_url: Joi.string().min(2),
    is_top_level: Joi.boolean(),
    is_opened: Joi.boolean(),
    tags: Joi.array().items(tagValidation),
    parameters: Joi.array().items(parameterValidation),
    database_relation: Joi.array().items(Joi.string()),
    triggers: Joi.array().items(triggerValidation),
    sub_items: Joi.array(),
    createdAt: Joi.string(),
    updatedAt: Joi.string()
})
export const updateModuleValidation = Joi.object({
    name: Joi.string().min(2),
    description: Joi.string().min(2),
    bg_color: Joi.string().min(2),
    detail_url: Joi.string().min(2),
    is_top_level: Joi.boolean(),
    is_opened: Joi.boolean(),
    tags: Joi.array().items(tagValidation),
    parameters: Joi.array().items(parameterValidation),
    triggers: Joi.array().items(triggerValidation),
    database_relation: Joi.array().items(Joi.string()),
    sub_items: Joi.array(),
    createdAt: Joi.string(),
    updatedAt: Joi.string()
})
export const moveValidation = Joi.object({
    moved_id: Joi.string().regex(mongoDbIdRegex),
    new_id: Joi.string().regex(mongoDbIdRegex),
})
