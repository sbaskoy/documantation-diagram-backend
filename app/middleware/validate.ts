import { NextFunction, Request, Response } from "express";
import { handleError } from "../models/ApiError";
import Joi from "joi";
export const validate = (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    const { value, error } = schema.validate(req.body);
    if (error) {
        const errorMessage = error.details?.map((detail) => detail.message).join(", ");
        return next(handleError(errorMessage));
    }
    Object.assign(req, value);
    return next();
}
