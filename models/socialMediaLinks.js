import mongoose from "mongoose";

export const youtubeModel = mongoose.model("youtubeLinks", mongoose.Schema({

    link: {
        type: String,
        default: "https://www.youtube.com/watch?v=otomCbnwsv0&ab_channel=MadebyGoogle"
    }

}))
