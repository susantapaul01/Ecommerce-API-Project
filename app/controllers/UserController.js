import { createUserProfileService, LoginService, readUserProfileService, updateUserProfileService, VerifyLoginService } from "../services/UserServices.js";

// export const Registration = async (req, res) => {
   
// }


export const Login = async (req, res) => {
    let result = await LoginService(req);
    return res.json(result);
}


export const VerifyLogin = async (req, res) => {
    let result = await VerifyLoginService(req);
    return res.json(result);
}



export const CreateUserProfile = async (req, res) => {
    let result = await createUserProfileService(req);
    return res.json(result);
}


export const UpdateUserProfile = async (req, res) => {
    let result = await updateUserProfileService(req);
    return res.json(result);
}



export const ReadUserProfile = async (req, res) => {
    let result = await readUserProfileService(req);
    return res.json(result);
}
