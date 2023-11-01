import catchAsyncError from "../middlewares/catchAsyncError.js";
import { instagramModel, socialMediaModel, youtubeModel } from "../models/socialMediaLinks.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getYtLink = catchAsyncError(async (req, res, next) => {
    const YTLink = await youtubeModel.find().limit(2)
    res.status(200).json({
        success: true,
        response: YTLink,
    })
})
export const getInstaLink = catchAsyncError(async (req, res, next) => {
    const IGLink = await instagramModel.find().limit(1)
    res.status(200).json({
        success: true,
        response: IGLink,
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
    }
    else if (link.includes("www.instagram.com")) {
        const response = new instagramModel(req.body)
        response.save()
        res.status(200).json({
            success: true,
            message: 'Link uploaded successfully',
        });
    } else {
        res.status(200).json({
            success: false,
            message: 'Please submit valid link',
        });
    }


})

export const updateLinks = catchAsyncError(async (req, res, next) => {
    const _id = "654200c9097687ed5c2a5c3b"
    const { link } = req.body
    if (!link) {
        res.status(400).json({
            success: false,
            message: "Link required"
        })
    }

    if (link.includes("www.youtube.com")) {
        const response = await socialMediaModel.findByIdAndUpdate(_id, { youtube: link })
        if (!response) {
            return next(new ErrorHandler(404, 'No Link found'));
        }
        res.status(200).json({
            success: true,
            message: 'Link updated successfully',
        });
    } else if (link.includes("www.instagram.com")) {
        const response = await socialMediaModel.findByIdAndUpdate(_id, { instagram: link })
        if (!response) {
            return next(new ErrorHandler(404, 'No Link found'));
        }
        res.status(200).json({
            success: true,
            message: 'Link updated successfully',
        });
    } else {
        res.status(200).json({
            success: false,
            message: 'Please submit valid link',
        });
    }
})