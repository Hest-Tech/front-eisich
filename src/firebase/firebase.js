import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};


console.log('FIREBASE_API_KEY:',process.env.FIREBASE_API_KEY);

const fire = firebase.initializeApp(firebaseConfig);
// const testFire = firebase.initializeTestApp({
//     databaseName: 'testDb',
//     auth: { uid: 'john' }
// });
const database = fire.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { googleAuthProvider, database, fire as default };