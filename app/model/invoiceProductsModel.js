import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, required: true },
        invoiceId: { type: mongoose.Schema.Types.ObjectId, required: true },
        productId: { type: mongoose.Schema.Types.ObjectId, required: true},
        qty: { type: String, required: true},
        price: { type: String, required: true},
        color: { type: String, required: true},
        size: { type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const invoiceProductsModel = mongoose.model('invoiceProducts', dataSchema);
export default invoiceProductsModel;