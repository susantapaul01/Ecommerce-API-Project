import mongoose from "mongoose";
const dataSchema = new Schema(
    {
        title: { type: String, required: true },
        shortDes: { type: String, required: true },
        price: { type: String, required: true },
        discount: { type: String, required: true },
        discountPrice: { type: String, required: true },
        image: { type: String, required: true },
        star: { type: String, required: true },
        stock: { type: String, required: true },
        remark: { type: String, required: true },
        categoryId: { type: mongoose.Schema.Types.ObjectId, required: true },
        brandId: { type: mongoose.Schema.Types.ObjectId, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const productModel = mongoose.model('products', dataSchema);