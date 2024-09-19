import mongoose from "mongoose";
let dataSchema = new Schema(
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

const categoryModel = mongoose.model('categories', dataSchema);