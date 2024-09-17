export const CategoryList = async (req, res) => {
    try {

        return res.json({ status: "success", messege: "CaregoryList successful"});
    }
    catch(e) {

        return res.json({ status: "fail", messege: e.toString() });
    }
}