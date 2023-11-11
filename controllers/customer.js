import catchAsyncError from '../middlewares/catchAsyncError.js';
import customerImageModel from '../models/customer.js';
import ErrorHandler from '../utils/errorHandler.js';
import { uploadImages } from '../utils/imageHandler.js';

export const createCustomer = catchAsyncError(async (req, res, next) => {
    if (!req.files) {
        return next(new ErrorHandler(400, 'Image is required as "images"'));
    }
    if (!req.body.name) {
        return next(new ErrorHandler(400, 'Name is required as "Name feild"'));
    }

    const images = await uploadImages(req.files);

    const customer = new customerImageModel(req.body);
    customer.image = images[0];
    await customer.save();
    res.status(201).json({
        message: 'customer image added successfully!',
        success: true,
        customer,
    });
});

export const allCustomer = catchAsyncError(async (req, res, next) => {
    const customers = await customerImageModel.find().select('-__v');
    if (customers.length == 0) {
        return next(new ErrorHandler(404, 'No customers found!'));
    }
    res.status(200).json({
        success: true,
        customers,
    });
});
