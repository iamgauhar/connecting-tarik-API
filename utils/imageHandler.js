import {
    ref,
    uploadBytes,
    deleteObject,
    getDownloadURL,
} from 'firebase/storage';
import storage from '../config/firebase.js';

export const uploadImages = async (files) => {
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

export const deleteImages = async (images) => {
    for (let image of images) {
        let imageRef = ref(storage, image);
        await deleteObject(imageRef);
    }
};
