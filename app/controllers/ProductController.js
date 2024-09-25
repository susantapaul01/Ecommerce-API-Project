import { ListByBrandServices, ListByCategoryServices, ListByRemarkServices, ProductDetailsByIdServices, SlidersListServices } from "../services/ProductServices.js"

export const ProductListByCategory = async (req, res) => {
    let result = await ListByCategoryServices(req);
    return res.json(result);
}



export const ProductListByRemark = async (req, res) => {
    let result = await ListByRemarkServices(req);
    return res.json(result);
}



export const ProductListByBrand = async (req, res) => {
    let result = await ListByBrandServices(req);
    return res.json(result);
}



export const ProductListBySlider = async (req, res) => {
    let result = await SlidersListServices()
    return res.json(result);
}



export const ProductDetailsById = async (req, res) => {
    let result = await ProductDetailsByIdServices(req);
    return res.json(result);
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
