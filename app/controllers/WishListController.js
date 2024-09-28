import { CreateWishServer, ReadWishListServer, RemoveWishServer } from "../services/wishListServer.js";

export const CreateWish = async (req, res) => {
    let result = await CreateWishServer(req);
    return res.json(result);
}


export const ReadWishList = async (req, res) => {
    let result = await ReadWishListServer(req);
    return res.json(result);
}


export const RemoveWish = async (req, res) => {
    let result = await RemoveWishServer(req);
    return res.json(result);    
}
