import express from 'express';
import path from 'path';
import { config } from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import passport from 'passport';
import Randomstring from 'randomstring';
import nodemailer from 'nodemailer'
import errorMiddleware from './middlewares/errorMiddleware.js';
import connectDatabase from './config/database.js';
import ErrorHandler from './utils/errorHandler.js';
import authRoutes from './routes/auth.js';
import logger from './config/logger.js';
import httpStatus from 'http-status';
import categoryRouter from './routes/category.js';
import productRouter from './routes/product.js';

// no __dirname in ES6 module scope, that's why i am using path.resolve()
config({ path: path.join(path.resolve(), 'config/config.env') });

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
app.use("/category", categoryRouter)
app.use("/product", productRouter)

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
