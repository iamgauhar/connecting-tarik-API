const {
    ref,
    uploadBytes,
    deleteObject,
    getDownloadURL,
} = require('firebase/storage');
const storage = require('../config/firebase');

const uploadImages = async (files) => {
    let imageURLs = [];
    for (let file of files) {
        let imageName = new Date().toISOString() + '-' + file.originalname;
        let imageRef = ref(storage, imageName);
        await uploadBytes(imageRef, file.buffer, {
            contentType: file.mimetype,
        });
        const imageUrl = await getDownloadURL(imageRef);
        imageURLs.push(imageUrl);
    }
    return imageURLs;
};

const deleteImages = async (images) => {
    for (let image of images) {
        let imageRef = ref(storage, image);
        await deleteObject(imageRef);
    }
};
module.exports = { uploadImages, deleteImages };
