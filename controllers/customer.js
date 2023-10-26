import catchAsyncError from "../middlewares/catchAsyncError.js";
import customerImage from "../models/customer.js";
import ErrorHandler from "../utils/errorHandler.js";
import { uploadImages } from "../utils/imageHandler.js";

export const createCustomer = catchAsyncError(async (req, res, next) => {
    if (!req.files) {
        return next(new ErrorHandler(400, 'Image is required as "images"'));
    }
    // console.log(req.files);
    const images = await uploadImages(req.files);

    const customer = new customerImage(req.body);
    customer.image = images[0];
    await customer.save();
    res.status(201).json({
        message: 'customer image added successfully!',
        success: true,
        customer,
    });
});
