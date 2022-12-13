
import { InferSchemaType, Schema } from "mongoose";

export const parameter_schema = new Schema({
    name: { type: String, required: true },
    type: { type: String, default: "string" },
}, { timestamps: true, _id: false });

export type IParameter = InferSchemaType<typeof parameter_schema>;