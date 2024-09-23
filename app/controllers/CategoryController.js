import { CategoryListServices } from "../services/ProductServices.js"

export const CategoryList = async (req, res) => {
    let result = await CategoryListServices();
    return res.json(result);
}