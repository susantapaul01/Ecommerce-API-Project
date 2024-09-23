import mongoose from "mongoose";
let dataSchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        categoryImg: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const categoriesModel = mongoose.model('categories', dataSchema);
export default categoriesModel;