import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAxWURa5oeWUmk_5wMWqA51-GbkCdR0uSA",
    authDomain: "e-isich-d50b6.firebaseapp.com",
    databaseURL: "https://e-isich-d50b6.firebaseio.com",
    projectId: "e-isich-d50b6",
    storageBucket: "e-isich-d50b6.appspot.com",
    messagingSenderId: "467081916892",
    appId: "1:467081916892:web:daed89767fa0b271c5df19",
    measurementId: "G-HH3D2ZFEQM"
};

const fire = firebase.initializeApp(firebaseConfig);
// const testFire = firebase.initializeTestApp({
//     databaseName: 'testDb',
//     auth: { uid: 'john' }
// });
const database = fire.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { googleAuthProvider, database, fire as default };