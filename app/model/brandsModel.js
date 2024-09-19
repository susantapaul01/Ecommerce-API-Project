import mongoose from "mongoose";

const dataSchema = new Schema(
    {
        brandName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        brandImg: {
            type: String,
            required: true,
        }
    }, 
    {
        timestamps: true,
        versionKey: false
    }
)

const brandsModel = mongoose.model('brands', dataSchema);