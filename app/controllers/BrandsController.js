export const BrandList = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "BrandList successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}