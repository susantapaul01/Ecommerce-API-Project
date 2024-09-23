import { BrandListServices } from "../services/ProductServices.js"

export const BrandList = async (req, res) => {
    let result = await BrandListServices();
    return res.json(result);
}