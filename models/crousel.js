import { model, Schema } from 'mongoose';

const crouselSchema = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const crouselModel = model('Crousel', crouselSchema);

export default crouselModel;
