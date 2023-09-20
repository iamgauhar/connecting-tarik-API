import mongoose from 'mongoose';
import logger from './logger.js';
async function connectDatabase() {
    try {
        const {
            connection: { host },
        } = await mongoose.connect('mongodb://127.0.0.1:27017', {
            dbName: process.env.DB_NAME,
        });
        logger.info('mongodb connected with server ' + host);
    } catch (err) {
        logger.error(err.message);
    }
}
export default connectDatabase;
