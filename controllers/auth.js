import crypto from 'crypto';
import ErrorHandler from '../utils/errorHandler.js';
import userModel from '../models/user.js';
import catchAsyncError from '../middlewares/catchAsyncError.js';
import sendEmail from '../utils/sendEmail.js';


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

    const { password, ...result } = existUser._doc;

    res.status(200).json({
        success: true,
        message: 'LoggedIn successfully',
        user: result,
        token,
    });
});



export const forgotPassword = catchAsyncError(async (req, res, next) => {
    const existUser = await userModel.findOne({ email: req.body.email });
    if (!existUser) {
        return next(new ErrorHandler(400, 'Account does not exist'));
    }

    const token = crypto.randomBytes(32).toString('hex');

    let message = `<h3>To reset your password <a href="${process.env.FRONTEND_URL}/reset-password/${existUser._id}/${token}">click here </a> </h3>`;

    let response = await sendEmail(req.body.email, 'Reset Password', message);
    if (response.messageId) {
        existUser.passwordResetToken = token;
        existUser.passwordResetTokenExpiration = Date.now() + 3600000; // 1 hour
        await existUser.save();
    }
    res.status(200).json({
        success: true,
        message: 'Password reset mail sent successfully',
    });
});

export const resetPassword = catchAsyncError(async (req, res, next) => {
    const { userId, token } = req.params;
    if (!req.body.password) {
        return next(new ErrorHandler(400, 'password is required'));
    }
    const user = await userModel.findOne({
        _id: userId,
        passwordResetToken: token,
        passwordResetTokenExpiration: { $gt: Date.now() },
    });
    if (!user) {
        return next(new ErrorHandler(400, 'Link is invalid or Expired'));
    }

    user.passwordResetToken = '';
    user.passwordResetTokenExpiration = null;
    user.password = req.body.password;
    await user.save();
    let { password, ...result } = user._doc;
    res.status(200).json({
        success: true,
        message: 'password reset successfully',
        user: result,
    });
});
