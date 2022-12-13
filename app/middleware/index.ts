import { Request, Response, NextFunction } from "express";
import { handleError } from "../models/ApiError";

export const mongoDbIdRegex = /^[0-9a-fA-F]{24}$/;

export const mongoDbIdChecker = (key?: string, regex?: RegExp) => (request: Request, res: Response, next: NextFunction) => {
    regex = regex || mongoDbIdRegex;
    key = key || 'id';
    if (!request?.params?.[key]?.match(regex)) {
        return next(handleError(`${key} should match this pattern ${regex}`));
    }
    return next()
}

export const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).send(error);
}