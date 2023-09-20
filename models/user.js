import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
        passwordResetToken: String,
        passwordResetTokenExpiration: Date,
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

userSchema.methods.createJWT = function () {
    const payload = {
        userId: this._id,
        email: this.email,
    };
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE_TIME,
    });
};

const userModel = model('User', userSchema);

export default userModel;
