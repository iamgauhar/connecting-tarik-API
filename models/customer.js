import mongoose from "mongoose";

const customerImage = mongoose.model('customerImage', mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}))

export default customerImage;