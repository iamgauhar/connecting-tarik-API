import catchAsyncError from "../middlewares/catchAsyncError.js";
import customerImageModel from "../models/customer.js";
import ErrorHandler from "../utils/errorHandler.js";
import { uploadImages } from "../utils/imageHandler.js";

export const createCustomer = catchAsyncError(async (req, res, next) => {
    if (!req.files) {
        return next(new ErrorHandler(400, 'Image is required as "images"'));
    }
    // console.log(req.files);
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
    const customers = await customerImageModel.find().select('-__v')
    res.status(200).json({
        success: true,
        customers,
    })
})