export const ProductListByCategory = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "CreateCart successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}



export const ProductListByRemark = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "ProductListByRemark successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}



export const ProductListByBrand = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "ProductListByBrand successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}



export const ProductListBySlider = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "ProductListBySlider successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}



export const ProductDetailsID = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "ProductDetailsID successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}



export const ProductListByKeyword = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "ProductListByKeyword successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}



export const ProductReviewListByID = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "ProductListByKeyword successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}



export const CreateProductReview = async (req, res) => {
    try {
        return res.json({ status: "success", messege: "ProductListByKeyword successful"});
    }
    catch(e) {
        return res.json({ status: "fail", messege: e.toString() });
    }
}
