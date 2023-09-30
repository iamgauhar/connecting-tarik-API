import ErrorHandler from "../utils/errorHandler.js";
import jwt from 'jsonwebtoken';
import catchAsyncError from "./catchAsyncError.js"
import userModel from "../models/user.js";

export default catchAsyncError(
    async function (req, res, next) {
        const bearerToken = req.headers['authorization'];
        if (!bearerToken) {
            return next(new ErrorHandler(401, "Unauthorized, No token provided."));
        }

        const token = bearerToken.split(' ')[1];

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const userId = decodedToken.userId;
        const user = await userModel.findById(userId);
        req.user = user;
        next();
    }
)