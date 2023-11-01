import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import passport from 'passport';
import httpStatus from 'http-status';
import multer from 'multer';
import errorMiddleware from './middlewares/errorMiddleware.js';
import connectDatabase from './config/database.js';
import ErrorHandler from './utils/errorHandler.js';
import logger from './config/logger.js';
import authRoutes from './routes/auth.js';
import categoryRoutes from './routes/category.js';
import productRoutes from './routes/product.js';
import customerRouter from './routes/customer.js';
import socialRoute from './routes/socialMedia.js';

// no __dirname in ES6 module scope, that's why i am using path.resolve()
config({ path: process.cwd() + '/config/config.env' });

// initializing express applicaiton
const app = express();

// set security http headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: false }));

// gzip compression
app.use(compression());

// multer
app.use(multer().array('images'));
// enable cors
app.use(cors());
app.options('*', cors());

// connect database
connectDatabase();

// initializing passport
app.use(passport.initialize());

// health check route
app.get('/', (req, res) => {
    res.status(httpStatus.OK).json({
        msg: 'server is working fine!',
        success: true,
    });
});

// api routes
app.use('/auth', authRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use('/customer', customerRouter);
app.use('/social', socialRoute);

// 404 error middleware
app.use((req, res, next) => {
    logger.error('NotFound Error');
    next(new ErrorHandler(httpStatus.NOT_FOUND, 'Route Not Found'));
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
    logger.info('server is running on http://localhost:' + PORT)
);
