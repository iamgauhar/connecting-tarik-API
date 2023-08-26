import mongoose from 'mongoose';
async function connectDatabase() {
    try {
        const {
            connection: { host },
        } = await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME,
        });
        console.log('mongodb connected with server ' + host);
    } catch (err) {
        console.log(err.message);
    }
}
export default connectDatabase;
