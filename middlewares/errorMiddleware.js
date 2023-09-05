import httpStatus from 'http-status';
import ErrorHandler from '../utils/errorHandler.js';
import logger from '../config/logger.js';

function errorMiddleware(err, req, res, next) {
    err.statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    err.message = err.message || 'Internal Server Error';

    // Wrong Mongodb Id error
    if (err.name === 'CastError') {
        const message = `Resource not found. invalid: ${err.path}`;
        err = new ErrorHandler(httpStatus.BAD_REQUEST, message);
    }

    // Mongoose duplicate key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(httpStatus.BAD_REQUEST, message);
    }

    // Wrong JWT error
    if (err.name === 'JsonWebTokenError') {
        const message = `Json web token is invalid, Try again `;
        err = new ErrorHandler(httpStatus.UNAUTHORIZED, message);
    }

    // JWT EXPIRE ERROR
    if (err.name === 'TokenExpiredError') {
        const message = `Json web token is Expired, Try again `;
        err = new ErrorHandler(httpStatus.UNAUTHORIZED, message);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
}
export default errorMiddleware;
