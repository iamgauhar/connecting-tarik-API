import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware.js';
import connectDatabase from './config/database.js';
import { config } from 'dotenv';
import ErrorHandler from './utils/errorHandler.js';
import authRoutes from './routes/auth.js';
config({ path: './config/config.env' });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDatabase();

app.get('/', async (req, res) => {
    res.status(200).json({ msg: 'server is working fine!', success: true });
});

app.use('/user', authRoutes);

app.use((req, res, next) => {
    next(new ErrorHandler(404, 'Route Not Found'));
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log('server is running on http://localhost:' + PORT)
);
