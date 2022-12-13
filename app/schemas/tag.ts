
import { InferSchemaType, Schema } from "mongoose";

export const tag_schema = new Schema({
    name: { type: String },
}, { timestamps: true, _id: false });

export type ITag = InferSchemaType<typeof tag_schema>;