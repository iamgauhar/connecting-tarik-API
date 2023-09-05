import ErrorHandler from '../utils/errorHandler.js';
import httpStatus from 'http-status';
import logger from '../config/logger.js';

const validate = (schema) => (req, res, next) => {
    const { value, error } = schema.validate(req.body);
    // console.log(error);
    if (error) {
        const errorMessage = error.details
            .map((detail) => detail.message)
            .join(', ');
        logger.error(errorMessage);
        return next(new ErrorHandler(httpStatus.BAD_REQUEST, errorMessage));
    }
    return next();
};
export default validate;
