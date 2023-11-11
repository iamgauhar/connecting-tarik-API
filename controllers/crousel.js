import crouselModel from '../models/crousel.js';
import catchAsyncError from '../middlewares/catchAsyncError.js';
import ErrorHandler from '../utils/errorHandler.js';
import { uploadImages } from '../utils/imageHandler.js';

export const createCrousel = catchAsyncError(async (req, res, next) => {
    if (!req.files || !req.body.link) {
        return next(new ErrorHandler(400, 'images and link are required'));
    }

    const images = await uploadImages(req.files);

    const crousel = new crouselModel(req.body);
    crousel.image = images[0];
    await crousel.save();
    res.status(201).json({
        message: 'crousel created successfully!',
        success: true,
        crousel,
    });
});

export const getCrousels = catchAsyncError(async (req, res, next) => {
    const crousels = await crouselModel.find().limit(4);
    if (crousels.length == 0) {
        return next(new ErrorHandler(404, 'No Crousel found!'));
    }
    res.status(201).json({
        message: 'crousel fetched successfully!',
        success: true,
        crousels,
    });
});
