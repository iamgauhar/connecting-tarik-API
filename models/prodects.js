import mongoose from 'mongoose';

const produdutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide the product name'],
    },
    price: {
        type: Number,
        required: [true, 'please provide the product price'],
    },
    image: {
        type: String,
        required: [true, 'please provide the product image url'],
    },
    description: {
        type: String,
        required: [true, 'please provide the product description'],
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'which category it belongs to?'],
    },
});

const productModel = mongoose.model('Product', produdutSchema);

export default productModel;
