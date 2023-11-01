import mongoose from "mongoose";

export const socialMediaModel = mongoose.model("socialmedia", mongoose.Schema({

    instagram: {
        type: String,
        default: "https://www.instagram.com/p/CyCFVMzPHVa/"
    },
    youtube: {
        type: String,
        default: "https://www.youtube.com/watch?v=otomCbnwsv0&ab_channel=MadebyGoogle"
    }

}))

export const youtubeModel = mongoose.model("youtubeLinks", mongoose.Schema({

    link: {
        type: String,
        default: "https://www.youtube.com/watch?v=otomCbnwsv0&ab_channel=MadebyGoogle"
    }

}))

export const instagramModel = mongoose.model("instagramLinks", mongoose.Schema({

    link: {
        type: String,
        default: "https://www.youtube.com/watch?v=otomCbnwsv0&ab_channel=MadebyGoogle"
    }

}))

