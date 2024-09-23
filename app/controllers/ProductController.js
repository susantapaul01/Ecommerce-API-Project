import { ListByBrandServices, SlidersListServices } from "../services/ProductServices.js"

export const ProductListByCategory = async (req, res) => {
    // try {
    //     return res.json({ status: "success", messege: "Product List By Category successful"});
    // }
    // catch(e) {
    //     return res.json({ status: "fail", messege: e.toString() });
    // }
}



export const ProductListByRemark = async (req, res) => {
    // try {
    //     return res.json({ status: "success", messege: "Product List By Remark successful"});
    // }
    // catch(e) {
    //     return res.json({ status: "fail", messege: e.toString() });
    // }
}



export const ProductListByBrand = async (req, res) => {
    let result = await ListByBrandServices(req);
    return res.json(result);
}



export const ProductListBySlider = async (req, res) => {
    let result = await SlidersListServices()
    return res.json(result);
}



export const ProductDetailsID = async (req, res) => {
    
}



export const ProductListByKeyword = async (req, res) => {
    // try {
    //     return res.json({ status: "success", messege: "Product List By Keyword successful"});
    // }
    // catch(e) {
    //     return res.json({ status: "fail", messege: e.toString() });
    // }
}



export const ProductReviewListByID = async (req, res) => {
    // try {
    //     return res.json({ status: "success", messege: "Product Review List By ID successful"});
    // }
    // catch(e) {
    //     return res.json({ status: "fail", messege: e.toString() });
    // }
}



export const CreateProductReview = async (req, res) => {
    // try {
    //     return res.json({ status: "success", messege: "Create Product Review successful"});
    // }
    // catch(e) {
    //     return res.json({ status: "fail", messege: e.toString() });
    // }
}
