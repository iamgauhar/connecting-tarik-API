import mongoose from 'mongoose';
import logger from './logger.js';
async function connectDatabase() {
    try {
        const {
            connection: { host },
        } = await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME,
        });
        logger.info('mongodb connected with server ' + host);
    } catch (err) {
        logger.error(err.message);
    }
}
export default connectDatabase;
