
export const Registration = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "Registration successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}


export const Login = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "Login successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}


export const VerifyLogin = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "VerifyLogin successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}



export const CreateUserProfile = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "Create User Profile successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}


export const UpdateUserProfile = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "UpdateUserProfile successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}



export const ReadUserProfile = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "Read User Profile successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}
