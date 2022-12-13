
import { Request, Response, NextFunction } from "express";


import module_services from "../services/module_services";
import { handleError } from './../models/ApiError';


export const listAllModule = async (request: Request, response: Response, next: NextFunction) => {
    try {
        var module_id = request.params?.id;
        if (module_id) {
            var module = await module_services.findOne({
                id: module_id,
                is_deleted: false
            });
            if (!module) {
                return next(handleError("Module not found", 404))
            }
            return response.status(200).send(module);
        }
        var modules = await module_services.findWhere({ is_deleted: false, is_top_level: true });
        return response.status(200).send(modules);
    } catch (err: any) {
        return next(handleError(err.message));
    }
}

export const addNewModule = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _module = request.body;
        var module = await module_services.save(_module);
        var res = await module_services.findById(module._id)
        return response.status(200).send(res)
    } catch (err: any) {
        return next(handleError(err.message));
    }
}

export const addSubItem = async (request: Request, response: Response, next: NextFunction) => {
    try {
        var module_id = request.params.id;
        const module = await module_services.findById(module_id);
        if (!module) {
            return next(handleError("Module not found", 404));
        }
        var subItem = await module_services.save(request.body);
        if (!subItem) {
            return next(handleError("Sub item not saved."))
        }
        module.sub_items.push(subItem!._id);
        await module.save();
        var res = await module_services.findById(subItem!._id);

        return response.status(200).send(res)
    } catch (err: any) {
        return next(handleError(err.message));
    }
}
export const update = async (request: Request, response: Response, next: NextFunction) => {
    try {
        var module_id = request.params.id;
        const module = await module_services.updateWithId(module_id, request.body);
        return response.status(200).send(module)
    } catch (err: any) {
        return next(handleError(err.message));
    }
}
export const deleteItem = async (request: Request, response: Response, next: NextFunction) => {
    try {
        var module_id = request.params.id;
        const module = await module_services.updateWithId(module_id, {
            is_deleted: true
        });
        return response.status(200).send({
            message: "Item deleted"
        })
    } catch (err: any) {
        return next(handleError(err.message));
    }
}
export const moveItems = async (request: Request, response: Response, next: NextFunction) => {
    try {
        var movedId = request.body.moved_id;
        var newId = request.body.new_id;
        var moved = await module_services.findById(movedId);
        var newItem = await module_services.findById(newId);

        if (!newItem) {
            return next(handleError("New item not found"));
        }
        if (!moved) {
            return next(handleError("Moved item not found"));
        }
        var newObject: any = moved.toObject()
        delete newObject._id;

        const clone = await module_services.save(newObject);
        newItem.sub_items.push(clone._id);
        moved.is_moved = true;
        newItem.save();
        moved.save();
        var res = await module_services.findById(clone._id);
        return response.status(200).send(res)
    } catch (err: any) {
        return next(handleError(err.message));
    }
}
