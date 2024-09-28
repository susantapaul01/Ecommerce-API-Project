import mongoose from "mongoose";
import cartsModel from "../model/cartsModel.js";
let ObjectID = mongoose.Types.ObjectId;

export const CreateCartService = async (req) => {
    try {
        let { productId, color, qty, size } = req.body;
        let user_id = req.headers['user_id'];
        let portJSON = {
            productId: productId,
            userId: user_id,
            color: color,
            qty: qty,
            size: size
        }
        await cartsModel.create(portJSON);
        return { status: 'success', messege: "Create Cart Successful" };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}



export const ReadCartListService = async (req) => {
    try {
        let user_id = new ObjectID(req.headers['user_id']);
        let matchStage = { $match: { "userId": user_id }};
        let joinWithProduct = { 
                                $lookup: {
                                    from: "products",
                                    localField: "productId",
                                    foreignField: "_id",
                                    as: "Product"
                            }}
        /* let unwindProduct = { $unwind: "$Product"}; */

        let data = await cartsModel.aggregate([
            matchStage, joinWithProduct
        ])
        return { status: 'success', data: data };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}



export const RemoveCartListService = async (req) => {
    try {
        let user_id = req.headers['user_id'];
        let { cartId } = req.body;
        let postJSON = {
            "_id": cartId,
            "userId": user_id
        }
        let data = await cartsModel.deleteOne(postJSON);
        return { status: 'success', messege: "Delete Cart Successful", data: data };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}


export const UpdateCartService = async (req) => {
    try {
        let { cartId, color, qty, size } = req.body;
        let user_id = req.headers['user_id'];
        let portJSON = {
            color: color,
            qty: qty,
            size: size
        }
        let data = await cartsModel.updateOne({"userId": user_id, "_id": cartId }, { $set: portJSON });
        return { status: 'success', messege: "update Cart Successful", data: data };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}