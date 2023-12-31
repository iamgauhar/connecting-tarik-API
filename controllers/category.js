import catchAsyncError from '../middlewares/catchAsyncError.js';
import categoryModel from '../models/category.js';
import ErrorHandler from '../utils/errorHandler.js';
import { uploadImages } from '../utils/imageHandler.js';

export const createCategory = catchAsyncError(async (req, res, next) => {
    if (!req.files) {
        return next(new ErrorHandler(400, 'Image is required as "images"'));
    }
    if (!req.body.name) {
        return next(new ErrorHandler(400, 'Name is required as "Name feild"'));
    }

    const images = await uploadImages(req.files);
    const category = new categoryModel(req.body);
    category.image = images[0]
    await category.save()
    res.status(201).json({
        message: 'Category created successfully!',
        success: true,
        category,
    });
});

export const allCategory = catchAsyncError(async (req, res, next) => {
    const categories = await categoryModel.find().select('-__v');
    res.json({
        categories,
        message: 'Categories fetched successfull',
        success: true,
    });
});

export const getCategoryById = catchAsyncError(async (req, res, next) => {
    const { categoryId } = req.params;
    const category = await categoryModel.findById(categoryId).select('-__v');
    if (!category) {
        return next(new ErrorHandler(404, 'category not found'));
    }
    res.json({
        category,
        message: 'Category fetched successfull',
        success: true,
    });
});
export const getCategoryByName = catchAsyncError(async (req, res, next) => {
    const { name } = req.query;
    if (!name) {
        return next(
            new ErrorHandler(400, 'please provide category name on query param')
        );
    }
    const category = await categoryModel.findOne({ name }).select('-__v');
    if (!category) {
        return next(new ErrorHandler(404, 'category not found'));
    }
    res.json({
        category,
        message: 'Category fetched successfull',
        success: true,
    });
});
