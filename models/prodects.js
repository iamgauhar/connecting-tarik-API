import mongoose from 'mongoose';

const produdutSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'please provide the product name'],
        },
        price: {
            type: Number,
            required: [true, 'please provide the product price'],
        },
        isPriceVisible: {
            type: Boolean,
            default: false,
        },
        images: {
            type: Array,
            required: [true, 'please provide the product images'],
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
        categoryName:{
            type: String,
            required: true
        
        }
    },
    { timestamps: true }
);

const productModel = mongoose.model('Product', produdutSchema);

export default productModel;
