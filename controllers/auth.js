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

export const login = catchAsyncError(async (req, res, next) => {
    const existUser = await userModel.findOne({ email: req.body.email });
    if (!existUser || !(await existUser.matchPassword(req.body.password))) {
        return next(new ErrorHandler(400, 'Email or Password is incorrect'));
    }

    const token = existUser.createJWT();

    res.status(200).json({
        success: true,
        message: 'LoggedIn successfully',
        token,
    });
});
