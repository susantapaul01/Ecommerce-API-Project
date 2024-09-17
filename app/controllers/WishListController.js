export const CreateWish = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "CreateWish successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}


export const ReadWishList = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "ReadWishList successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}


export const RemoveWish = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "RemoveWish successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}