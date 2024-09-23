import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, required: true },
        productId: { type: mongoose.Schema.Types.ObjectId, required: true},
        description: { type: String, required: true},
        rating: { type: String, required: true}
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const reviewsModel = mongoose.model('reviews', dataSchema);
export default reviewsModel;