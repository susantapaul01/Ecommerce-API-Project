import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true, lowercase: true },
        otp: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const usersModel = mongoose.model('users', dataSchema);
export default usersModel;

