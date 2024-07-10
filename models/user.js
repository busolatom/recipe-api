import { model, Schema } from "mongoose";
import { toJSON } from '@reis/mongoose-to-json';

const userSchema = new Schema({
    fullName: { type: String, required: true },
    userName: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
})

userSchema.plugin(toJSON)

export const UserModel = model('User', userSchema)
