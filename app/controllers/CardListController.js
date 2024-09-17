export const CreateCart = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "CreateCart successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}


export const UpdateCart = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "UpdateCart successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}


export const ReadCartList = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "ReadCartList successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}


export const RemoveCart = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "RemoveCart successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}