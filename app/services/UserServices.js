import mongoose from "mongoose";
import profilesModel from "../model/profilesModel.js";
import usersModel from "../model/usersModel.js";
import { TokenEncode } from "../utility/tokenUtility.js";
// import { EmailSend } from "../utility/emailUtility.js";

let ObjectID = mongoose.Types.ObjectId;

export const LoginService = async (req) => {
    try {
        let { email } = req.body;
        let OTP = Math.floor(100000 + Math.random() * 900000);
        let EmailTo = email;
        let EmailText = `Your verification code is ${OTP}`;
        let EmailSubject = "Email Verification";

        /* await EmailSend(EmailTo, EmailSubject, EmailText); */
        await usersModel.updateOne({ email: email}, { $set: {"otp": OTP }}, { upsert: true});
        return { Status: 'success', messege: "OTP send successfully."};
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}



export const VerifyLoginService = async (req) => {
    try {
        let { email, otp } = req.body;
        let total = await usersModel.countDocuments({ email: email, otp: otp });
        if(total===1) {
            let user_id = await usersModel.find({ email: email, otp: otp}).select('_id');
            let userid = user_id[0]['_id'].toString();
            let token = TokenEncode(email, userid);
            req.headers['TOKEN'] = token;
            await usersModel.updateOne({email: email}, { $set: { otp: "0"}});
            return { status: 'success', messege: token };
        }
        else {
            return { messege: "Invalid OTP" };
        }
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}



export const createUserProfileService = async (req) => {
    try {
        let user_id = req.headers['user_id'];
        let reqBody = req.body;
        reqBody.userID = user_id;
        await profilesModel.updateOne({userID: user_id}, { $set: reqBody }, { upsert: true});
        return { status: 'success', messege: "Create Successful" };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}



export const readUserProfileService = async (req) => {
    try {
        /* let user_id = req.headers['user_id'];
        let user = await profilesModel.findOne({"userID": user_id}) */
        let user_id = new ObjectID(req.headers['user_id']);
        let matchStage = { $match: { "userID": user_id }};
        let joinWithUser = { $lookup: { from: "users", localField: "userID", foreignField: "_id", as: "user" }}
        let user = await profilesModel.aggregate([
            matchStage, joinWithUser
        ])
        return { status: 'success', user: user };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}




export const updateUserProfileService = async (req) => {
    try {
        let user_id = req.headers['user_id'];
        let reqBody = req.body;
        // reqBody.userID = user_id;
        await profilesModel.updateOne({userID: user_id}, { $set: reqBody }, { upsert: true});
        return { status: 'success', messege: "Profile update Successful" };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}


