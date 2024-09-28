import mongoose from "mongoose";
import wishesModel from "../model/wishesModel.js";

let ObjectID = mongoose.Types.ObjectId;

export const CreateWishServer = async (req) => {
    try {
        let user_id = req.headers['user_id'];
        let { productId } = req.body;
        let postJSON = {
            productId: productId,
            userId: user_id
        }
        // Quary
        await wishesModel.updateOne(postJSON, { $set: postJSON},{ upsert: true});
        return { status: 'success', messege: "Create Wish Successful" };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}


export const ReadWishListServer = async (req) => {
    try {
        let user_id = new ObjectID(req.headers['user_id']);
        let matchStage = { $match: { "userId": user_id }};
        let joinWithProduct = { $lookup: { from: "products", localField: "productId", foreignField: "_id", as: "Products" }};
        let joinWithUser = { $lookup: { from: 'users', localField: 'userId', foreignField: "_id", as: "User" }}
        let unwindProduct = { $unwind: "$Products"};
        let unwindUser = { $unwind: "$User"};
        let projection = { $project:   { Products: 1, User: 1 }};
        let data = await wishesModel.aggregate([
            matchStage, joinWithProduct, joinWithUser, unwindProduct, unwindUser, projection
        ]);
        return { status: 'success', messege: data };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}



export const RemoveWishServer = async (req) => {
    try {
        let user_id = req.headers['user_id'];
        let { productId } = req.body;
        let postJSON = {
            productId: productId,
            userId: user_id
        }
        await wishesModel.deleteOne(postJSON);
        return { status: 'success', messege: "Delete wish Successful" };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}


