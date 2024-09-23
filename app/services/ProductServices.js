import mongoose from 'mongoose';
import brandsModel from '../model/brandsModel.js';
import categoriesModel from '../model/categoriesModel.js';
import productsModel from '../model/productsModel.js';
import slidersModel from '../model/slidersModel.js';

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

// ==================================
const ObjectId = mongoose.Types.ObjectId;
export const ListByBrandServices = async (req) => {
    try {
        let BrandId = new ObjectId(req.params.brandId);
        let matchStage = { $match: { 'brandID': BrandId}};

        let joinWithBrandStage = { $lookup: { from: 'brands', localField: "brandID", foreignField: "_id", as: 'brand' }};
        let joinWithCategoryStage = { $lookup: { from: 'categories', localField: 'categoryID', foreignField: "_id", as: 'category' }}
        
        let unwindBrandStage = { $unwind: "$brand"};
        let unwindCategoryState = { $unwind: "$category"}

        let projection = { $project: { "brandID": 0, "categoryID": 0, "brand._id": 0, "category._id": 0}}
        let data = await productsModel.aggregate([
            matchStage,
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