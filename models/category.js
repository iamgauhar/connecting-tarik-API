import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'category name is required'],
        trim: true,
        unique: [true],
    },
});

const categoryModel = model('Category', categorySchema);

export default categoryModel;
