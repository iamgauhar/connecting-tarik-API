import { Schema, model } from 'mongoose';

const userModel = model(
    'User',
    new Schema(
        {
            name: {
                type: String,
                required: [true, 'name is required'],
                unique: true,
            },
            age: {
                type: Number,
                required: [true, 'age is required'],
            },
        },
        { timestamps: true }
    )
);

export default userModel;
