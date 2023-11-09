import catchAsyncError from "../middlewares/catchAsyncError.js";
import {youtubeModel } from "../models/socialMediaLinks.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getYtLink = catchAsyncError(async (req, res, next) => {
    const YTLink = await youtubeModel.find().limit(3)
    res.status(200).json({
        success: true,
        response: YTLink,
    })
})

export const uploadLink = catchAsyncError(async (req, res, next) => {
    const { link } = req.body

    if (!link) {
        res.status(400).json({
            success: false,
            message: "Link required"
        })
    }

    if (link.includes("www.youtube.com")) {
        const response = new youtubeModel(req.body)
        response.save()
        res.status(200).json({
            success: true,
            message: 'Link uploaded successfully',
        });
    }else {
        res.status(200).json({
            success: false,
            message: 'Please submit valid link',
        });
    }


})

