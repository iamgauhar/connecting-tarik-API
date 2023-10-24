import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { config } from 'dotenv';
config({ path: process.cwd() + '/config/config.env' });

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGEING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

export default getStorage(firebaseApp);
