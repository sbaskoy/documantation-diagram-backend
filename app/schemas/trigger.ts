
import { InferSchemaType, Schema } from "mongoose";

export const trigger_schema = new Schema({
    module_id: { type: String, required: true },
    name: { type: String, required: true },
}, { timestamps: true, _id: false });

export type ITrigger = InferSchemaType<typeof trigger_schema>;