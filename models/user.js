import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
    {
        name: {
            type: String,
            // required: [true, 'name is required'],
            trim: true,
        },
        email: {
            type: String,
            // required: [true, 'email is required'],
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            // required: [true, 'password is required'],
            trim: true,
        },
        phone_no: {
            type: String,
        },
        status: {
            type: String,
            enum: ['Active', 'InActive', 'Blocked'],
        },
        deleted: {
            type: Boolean,
            default: false,
        },
        profile_photo: String,
        terms_and_conditions: {
            type: Boolean,
            default: false,
        },
        isVerified: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const userModel = model('User', userSchema);

export default userModel;
