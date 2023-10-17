import productModel from '../models/prodects.js';
import catchAsyncError from '../middlewares/catchAsyncError.js';
import ErrorHandler from '../utils/errorHandler.js';

export const createProduct = catchAsyncError(async (req, res, next) => {
    const product = await productModel.create(req.body);
    res.status(201).json({
        message: 'Product added successfully!',
        success: true,
        product,
    });
});

export const allProduct = catchAsyncError(async (req, res, next) => {
    const products = await productModel.find().select('-__v');
    if (products.length == 0) {
        return next(new ErrorHandler(404, 'No product found'));
    }
    res.status(201).json({
        products,
        message: 'Products fetched successfully!',
        success: true,
    });
});

export const updateProduct = catchAsyncError(async (req, res, next) => {
    const productId = req.params.produdctId;
    const product = await productModel.findByIdAndUpdate(productId, req.body, {
        new: true,
    });
    if (!product) {
        return next(new ErrorHandler(404, 'No product found'));
    }
    res.status(200).json({
        success: true,
        message: 'product updated successfully',
        product,
    });
});

export const deleteProduct = catchAsyncError(async (req, res, next) => {
    const productId = req.params.produdctId;
    const product = await productModel.findByIdAndDelete(productId);
    if (!product) {
        return next(new ErrorHandler(404, 'No product found'));
    }
    res.status(200).json({
        success: true,
        message: 'product deleted successfully',
    });
});

export const getProduct = catchAsyncError(async (req, res, next) => {
    const productId = req.params.produdctId;
    const product = await productModel.findById(productId);
    if (!product) {
        return next(new ErrorHandler(404, 'Product not found'));
    }
    res.status(200).json({
        success: true,
        message: 'product fetched successfully',
        product,
    });
});
