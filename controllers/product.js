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
