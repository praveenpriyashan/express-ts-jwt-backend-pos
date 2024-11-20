import {Schema, InferSchemaType, model} from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, select: false, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, required: true, default: Date.now()}
})

type User = InferSchemaType<typeof userSchema>;
export default model<User>("User", userSchema);