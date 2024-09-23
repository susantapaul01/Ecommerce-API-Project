import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
        productId: { type: mongoose.Schema.Types.ObjectId, required: true },
        usersId: { type: mongoose.Schema.Types.ObjectId, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const wishesModel = mongoose.model('wishes', dataSchema);
export default wishesModel;