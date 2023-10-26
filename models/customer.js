import mongoose from "mongoose";

const customerImageModel = mongoose.model('customerImage', mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}))

export default customerImageModel;