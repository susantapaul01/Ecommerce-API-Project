import express from "express";
const router = express.Router();

import * as UserController from "../app/controllers/UserController.js"
import { BrandList } from "../app/controllers/BrandsController.js";
import { CategoryList } from "../app/controllers/CategoryController.js";
import * as CardListController from "../app/controllers/CardListController.js";
import * as WishListController from "../app/controllers/WishListController.js";
import * as ProductController from "../app/controllers/ProductController.js";


// ==== UserController router
router.post('/registration', UserController.Registration);
router.post('/login', UserController.Login);
router.post('/verifyLogin', UserController.VerifyLogin);
router.post('/createUserProfile', UserController.CreateUserProfile);
router.get('/readUserProfile', UserController.ReadUserProfile);
router.post('/updateUserProfile', UserController.UpdateUserProfile);

// ==== BrandController router
router.post('/brandList', BrandList);

// ==== Caregories router
router.post('/categoryList', CategoryList);

// ==== CartListController router
router.post('/createCart', CardListController.CreateCart);
router.post('/updateCart', CardListController.UpdateCart);
router.post('/readCartList', CardListController.ReadCartList);
router.post('/removeCart', CardListController.RemoveCart);

// ==== WishListController router
router.post('/createWish', WishListController.CreateWish);
router.post('/readWishList', WishListController.ReadWishList);
router.post('/removeWish', WishListController.RemoveWish);

// ==== ProductController router
router.post('/productListByCategory', ProductController.ProductListByCategory);
router.post('/productListByRemark', ProductController.ProductListByRemark);
router.post('/productListByBrand', ProductController.ProductListByBrand);
router.post('/productListBySlider', ProductController.ProductListBySlider);
router.post('/productDetailsID', ProductController.ProductDetailsID);
router.post('/productListByKeyword', ProductController.ProductListByKeyword);
router.post('/productReviewListByID', ProductController.ProductReviewListByID);
router.post('/createProductReview', ProductController.CreateProductReview);

// ==== Invoice router







export default router;




