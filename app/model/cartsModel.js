import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, required: true },
        productId: { type: mongoose.Schema.Types.ObjectId, required: true },
        color: { type: String, required: true },
        qty: { type: String, required: true },
        size: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const cartsModel = mongoose.model('carts', dataSchema);
export default cartsModel;