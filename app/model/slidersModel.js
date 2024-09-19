import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        des: { type: String, required: true },
        price: { type: String, required: true },
        img: { type: String, required: true },
        productId: { type: mongoose.Schema.Types.ObjectId, required: true }

    },
    {
        timestamps: true,
        versionKey: false
    }
)

const productSlidersModel = mongoose.model('productSliders', dataSchema);