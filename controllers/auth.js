import ErrorHandler from '../utils/errorHandler.js';
import userModel from '../models/user.js';
import catchAsyncError from '../middlewares/catchAsyncError.js';

export const signup = catchAsyncError(async (req, res, next) => {
    const existUser = await userModel.findOne({ email: req.body.email });
    if (existUser) {
        return next(new ErrorHandler(400, 'Account already exist'));
    }
    const user = await userModel.create(req.body);

    res.status(201).json({
        message: 'user created successfully!',
        success: true,
        user,
    });
});
