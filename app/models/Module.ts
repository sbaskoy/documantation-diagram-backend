
import mongoose, { Schema, InferSchemaType, model, Query } from "mongoose";
import { tag_schema } from "../schemas/tag";
import { trigger_schema } from "../schemas/trigger";
import { parameter_schema } from './../schemas/parameter';

const module_schema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    detail_url: { type: String },
    bg_color: { type: String },
    tags: { type: [tag_schema], default: [] },
    parameters: { type: [parameter_schema], default: [] },
    database_relation: { type: [String], default: [] },
    triggers: { type: [trigger_schema], default: [] },
    is_deleted: { type: Boolean, default: false },
    is_moved: { type: Boolean, default: false },
    is_top_level: { type: Boolean, default: false },
    is_opened: { type: Boolean, default: false },
    sub_items: [{
        type: mongoose.Types.ObjectId,
        ref: "module"
    }]
}, { timestamps: true, versionKey: false });


module_schema.methods.getPublicFields = function () {
    var returnObject = {
        _id: this._id,
        name: this.name,
        description: this.description,
        bg_color: this.bg_color,
        detail_url: this.detail_url,
        tags: this.tags,
        parameters: this.parameters,
        triggers: this.triggers,
        database_relation: this.database_relation,
        sub_items: this.sub_items,
        is_top_level: this.is_top_level,
        is_opened: this.is_opened,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
    return returnObject;
};

export const moduleSelect = "_id name description bg_color detail_url tags parameters triggers database_relation sub_items is_top_level is_opened createdAt createdAt";

module_schema
    .pre('findOne', function (next: any) {
        this.select(moduleSelect).populate({
            path: 'sub_items',
            match: { 'is_deleted': false, 'is_moved': false },
        });
        next();
    })
    .pre('find', function (next: any) {
        this.select(moduleSelect).populate({
            path: 'sub_items',
            match: { 'is_deleted': false, 'is_moved': false },
        });
        next();
    }).pre('save', function (next: any) {

        next();
    }).pre('update', function (next: any) {
        this.select(moduleSelect).populate({
            path: 'sub_items',
            match: { 'is_deleted': false, 'is_moved': false },
        });
        next();
    }).pre('updateOne', function (next: any) {
        this.select(moduleSelect).populate({
            path: 'sub_items',
            match: { 'is_deleted': false, 'is_moved': false },
        });
        next();
    });


export type IModule = InferSchemaType<typeof module_schema>


export default model("module", module_schema);