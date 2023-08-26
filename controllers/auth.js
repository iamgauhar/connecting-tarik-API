import ErrorHandler from '../utils/errorHandler.js';
import userModel from '../models/user.js';
import catchAsyncError from '../middlewares/catchAsyncError.js';

export const newUser = catchAsyncError(async (req, res, next) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return next(new ErrorHandler(422, 'name and age are required!'));
    }
    const user = await userModel.create({ name, age });

    res.status(201).json({
        message: 'user created successfully!',
        success: true,
    });
});

export const getUsers = async (req, res, next) => {
    const users = await userModel.find();
    res.status(200).json({ success: true, users });
};
