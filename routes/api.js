import express from "express";
const router = express.Router();

import * as UserController from "../app/controllers/UserController.js"
import { BrandList } from "../app/controllers/BrandsController.js";
import { CategoryList } from "../app/controllers/CategoryController.js";
import * as CardListController from "../app/controllers/CardListController.js";
import * as WishListController from "../app/controllers/WishListController.js";
import * as ProductController from "../app/controllers/ProductController.js";
import * as InvoiceController from "../app/controllers/InvoiceController.js";


// ==== UserController router
router.post('/registration', UserController.Registration);
router.post('/login', UserController.Login);
router.post('/verifyLogin', UserController.VerifyLogin);
router.post('/createUserProfile', UserController.CreateUserProfile);
router.get('/readUserProfile', UserController.ReadUserProfile);
router.post('/updateUserProfile', UserController.UpdateUserProfile);

// ==== BrandController router
router.get('/brandList', BrandList);

// ==== Caregories router
router.get('/categoryList', CategoryList);  

// ==== CartListController router
router.post('/createCart', CardListController.CreateCart);
router.post('/updateCart', CardListController.UpdateCart);
router.get('/readCartList', CardListController.ReadCartList);
router.post('/removeCart', CardListController.RemoveCart);

// ==== WishListController router
router.post('/createWish', WishListController.CreateWish);
router.get('/readWishList', WishListController.ReadWishList);
router.post('/removeWish', WishListController.RemoveWish);

// ==== ProductController router
router.get('/productListByCategory', ProductController.ProductListByCategory);
router.get('/productListByRemark', ProductController.ProductListByRemark);
router.get('/productListByBrand/:brandId', ProductController.ProductListByBrand); // working...
router.get('/productListBySlider', ProductController.ProductListBySlider);
router.get('/productDetailsID', ProductController.ProductDetailsID);
router.get('/productListByKeyword', ProductController.ProductListByKeyword);
router.get('/productReviewListByID', ProductController.ProductReviewListByID);

// Review
router.post('/createProductReview', ProductController.CreateProductReview);

// ==== Invoice router
router.post('/createInvoice', InvoiceController.CreateInvoice);
router.get('/readInvoiceList', InvoiceController.ReadInvoiceList);
router.get('/readInvoiceDetails', InvoiceController.ReadInvoiceDetails);


export default router;




