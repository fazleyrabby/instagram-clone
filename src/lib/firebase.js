import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';
const config = {
    apiKey: "AIzaSyAUX57SxAIuzBl6LQvlRPjtkSPJ6KUVc_A",
    authDomain: "instagram-clone-4893c.firebaseapp.com",
    projectId: "instagram-clone-4893c",
    storageBucket: "instagram-clone-4893c.appspot.com",
    messagingSenderId: "653214781259",
    appId: "1:653214781259:web:f73a8b17bed6b67ab662ce"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//Import seed file
// seedDatabase(firebase);
export { firebase, FieldValue }