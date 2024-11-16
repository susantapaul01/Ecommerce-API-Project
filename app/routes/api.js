import express from "express";
const router = express.Router();

import * as UserController from "../controllers/UserController.js"
import { BrandList } from "../controllers/BrandsController.js";
import { CategoryList } from "../controllers/CategoryController.js";
import * as CardListController from "../controllers/CardListController.js";
import * as WishListController from "../controllers/WishListController.js";
import * as ProductController from "../controllers/ProductController.js";
import * as InvoiceController from "../controllers/InvoiceController.js";
import authMiddleware from "../middlewares/authMiddleware.js";


// ==== User Controller router
// router.post('/registration', UserController.Registration);
router.post('/login', UserController.Login);                                            // Working Done
router.post('/verifyLogin', UserController.VerifyLogin);                                // Working Done
router.post('/createUserProfile', authMiddleware, UserController.CreateUserProfile);    // Working Done
router.get('/readUserProfile', authMiddleware, UserController.ReadUserProfile);         // Working Done
router.post('/updateUserProfile', authMiddleware, UserController.UpdateUserProfile);    // Working Done

// ==== Brand Controller router
router.get('/brandList', BrandList);         // Working Done

// ==== Caregories router
router.get('/categoryList', CategoryList);  // Working Done

// ==== Cart List Controller router
router.post('/createCart', authMiddleware, CardListController.CreateCart);      // Working Done
router.post('/updateCart', authMiddleware, CardListController.UpdateCart);      // Working Done
router.get('/readCartList', authMiddleware, CardListController.ReadCartList);   // Working Done
router.post('/removeCart', authMiddleware, CardListController.RemoveCart);      // Working Done

// ==== Wish List Controller router
router.post('/createWish', authMiddleware, WishListController.CreateWish);      // Working Done
router.get('/readWishList', authMiddleware, WishListController.ReadWishList);   // Working Done
router.post('/removeWish', authMiddleware, WishListController.RemoveWish);      // Working Done

// ==== Product Controller router
router.get('/productListByBrand/:brandId', ProductController.ProductListByBrand);           // Working Done
router.get('/productListByCategory/:categoryId', ProductController.ProductListByCategory);  // Working Done
router.get('/productListBySlider', ProductController.ProductListBySlider);                  // Working Done
router.get('/productDetailsById/:productId', ProductController.ProductDetailsById);         // Working Done 
router.get('/productListByRemark/:remark', ProductController.ProductListByRemark);          // Working Done 
router.get('/productListByKeyword/:keyword', ProductController.ProductListByKeyword);       // Working Done
router.get('/productReviewListByID/:productId', ProductController.ProductReviewListByID);   // Working Done

// Review
router.post('/createProductReview', ProductController.CreateProductReview);

// ==== Invoice router
router.post('/createInvoice', InvoiceController.CreateInvoice);
router.get('/readInvoiceList', InvoiceController.ReadInvoiceList);
router.get('/readInvoiceDetails', InvoiceController.ReadInvoiceDetails);


export default router;




