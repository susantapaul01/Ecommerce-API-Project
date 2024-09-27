import mongoose from 'mongoose';
import brandsModel from '../model/brandsModel.js';
import categoriesModel from '../model/categoriesModel.js';
import productsModel from '../model/productsModel.js';
import slidersModel from '../model/slidersModel.js';
import reviewsModel from '../model/reviewsModel.js';
const ObjectID = mongoose.Types.ObjectId;

export const BrandListServices = async () => {
    try {
        let data = await brandsModel.find();
        return { status: 'success', data: data };
    }
    catch(e) {
        return { status: 'fail', data: e.toString() };
    }
}

export const CategoryListServices = async () => {
    try {
        let data = await categoriesModel.find();
        return { status: 'success', data: data };
    }
    catch(e) {
        return { status: 'fail', data: e.toString() };
    }
}

export const SlidersListServices = async () => {
    try {
        let data = await slidersModel.find();
        if(data.length === 0) {
            return { status: 'No Data Found' };
        }
        else {
            return { status: 'success', data: data };
        }
    }
    catch(e) {
        return { status: 'fail', data: e.toString() };
    }
}

// ===============

export const ListByBrandServices = async (req) => {
    try {
        let BrandId = new ObjectID(req.params.brandId);
        let MatchStage = { $match: { 'brandID': BrandId}};

        let joinWithBrandStage = { $lookup: { from: 'brands', localField: "brandID", foreignField: "_id", as: 'brand' }};
        let joinWithCategoryStage = { $lookup: { from: 'categories', localField: 'categoryID', foreignField: "_id", as: 'category' }}
        
        let unwindBrandStage = { $unwind: "$brand"};
        let unwindCategoryState = { $unwind: "$category"}

        let projection = { $project: { "brandID": 0, "categoryID": 0, "brand._id": 0, "category._id": 0}}
        // Quary
        let data = await productsModel.aggregate([
            MatchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryState,
            projection
        ])
        return { status: 'success', data: data };
    }
    catch(e) {
        return { state: 'fail', data: e.toString() }
    }
}


export const ListByCategoryServices = async (req) => {
    try {
        let categoryId = new ObjectID(req.params.categoryId);
        let MatchStage = { $match: { "categoryID": categoryId }};
        let joinWithCategoryStage = { $lookup: { from: "categories", localField: "categoryID", foreignField: "_id", as: "Category"}};
        let joinWithBrandState = { $lookup: { from: 'brands', localField: "brandID", foreignField: "_id", as: "Brand" }};
        let unwindCategoryState = { $unwind: "$Category" };
        let unwindBrandStage = { $unwind: "$Brand" };
        let projection = { $project: { "categoryID": 0, "category._id": 0, "brandID": 0, "brand._id": 0 }};
        // Quary
        let data = await productsModel.aggregate([
            MatchStage,
            joinWithBrandState,
            joinWithCategoryStage,
            unwindCategoryState,
            unwindBrandStage,
            projection
        ])
        return { status: 'success', data: data };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}



export const ListByRemarkServices = async (req) => {
    try {
        let Remark = req.params.remark;
        let MatchStage = { $match: { 'remark': Remark }};

        let joinWithBrandState = { $lookup: { from: 'brands', localField: "brandID", foreignField: "_id", as: "Brand" }};
        let joinWithCategoryStage = { $lookup: { from: 'categories', localField: "categoryID", foreignField: "_id", as: "Category"}};

        let unwindBrandStage = { $unwind: "$Brand"};
        let unwindCategoryState = { $unwind: "$Category"};
        let projection = { $project: { "categoryID": 0, "brandID": 0, "Brand._id": 0, "Category._id": 0 }};
        // Quary
        let data = await productsModel.aggregate([
            MatchStage,
            joinWithBrandState,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryState,
            projection
        ])
        return { status: 'success', numberOfArray: data.length, data: data };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}



export const ProductDetailsByIdServices = async (req) => {
    try {
        let productId = new ObjectID(req.params.productId);
        let MatchStage = { $match: { "_id": productId }};

        let joinWithProductDetails = { $lookup: { from: "productDetails", localField: "_id", foreignField: "productID", as: "Details" }}
        let joinWithBrandState = { $lookup: { from: "brands", localField: "brandID", foreignField: "_id", as: "Brand" }};
        let joinWithCategoryStage = { $lookup: { from: "categories", localField: "categoryID", foreignField: "_id", as: "Category" }};

        let unwindBrandStage = { $unwind: "$Brand" };
        let unwindCategoryState = { $unwind: "$Category"}
        let projection = { $project: { "categoryID": 0, "brandID": 0, "Brand._id": 0, "Category._id": 0 }};
        // Query
        let data = await productsModel.aggregate([
            MatchStage,
            joinWithBrandState,
            joinWithCategoryStage,
            joinWithProductDetails,
            unwindBrandStage,
            unwindCategoryState,
            projection
        ])
        // console.log(data)
        return { status: 'success', data: data };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}


export const ListKeywordByService = async (req) => {
    try {
        let keyword = req.params.keyword;
        let Regex = { $regex: keyword, $options: 'i'};
        let SearchParams = [{ title: Regex}, { shortDes: Regex}];
        let SearchQuery = { $or: SearchParams };
        let MatchingStage = { $match: SearchQuery }

        /* let MatchingStage = { $match: 
                                    { $or: 
                                        [
                                            { title: { $regex: keyword, $options: 'i'}}, 
                                            { shortDes: { $regex: keyword, $options: 'i'}}
                                        ] 
                                    } 
                                }
        
        */

        let joinWithBrandState = { $lookup: { from: 'brands', localField: "brandID", foreignField: "_id", as: "Brand" }};
        let joinWithCategoryStage = { $lookup: { from: 'categories', localField: "categoryID", foreignField: "_id", as: "Category"}};
        
        let unwindBrandStage = { $unwind: "$Brand"};
        let unwindCategoryState = { $unwind: "$Category"};
        let projection = { $project: { "categoryID": 0, "brandID": 0, "Brand._id": 0, "Category._id": 0 }};

        let data = await productsModel.aggregate([
            MatchingStage,
            joinWithBrandState,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryState,
            projection
        ])
        // console.log(data)
        return { status: 'success', data: data };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}


export const ReviewListByService = async (req) => {
    try {
        let ProductID = new ObjectID(req.params.productId);
        let MatchStage = { $match: { 'productID': ProductID }};

        let joinWithProductState = { $lookup: { from: 'products', localField: "productID", foreignField: "_id", as: "Product" }};
        let joinWithUserId = { $lookup: { from: 'users', localField: 'userID', foreignField: '_id', as: "User" }};

        // let unwindBrandStage = { $unwind: "$Brand"};
        // let unwindCategoryState = { $unwind: "$Category"};
        let projection = { $project: { "productID": 0, "Product._id": 0, "_id": 0, "userID": 0, "User._id": 0 }};

        let data = await reviewsModel.aggregate([
            MatchStage,
            joinWithProductState,
            joinWithUserId,
            projection
        ])
        return { status: 'success', data: data };
    }
    catch(e) {
        return { status: 'fail', messege: e.toString() };
    }
}