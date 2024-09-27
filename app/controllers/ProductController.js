import { ListByBrandServices, ListByCategoryServices, ListByRemarkServices, ListKeywordByService, ProductDetailsByIdServices, ReviewListByService, SlidersListServices } from "../services/ProductServices.js"

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
    let result = await ListKeywordByService(req);
    return res.json(result);
}



export const ProductReviewListByID = async (req, res) => {
    let result = await ReviewListByService(req);
    return res.json(result);
}



export const CreateProductReview = async (req, res) => {
    // try {
    //     return res.json({ status: "success", messege: "Create Product Review successful"});
    // }
    // catch(e) {
    //     return res.json({ status: "fail", messege: e.toString() });
    // }
}
