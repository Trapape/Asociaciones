import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBs-iRGy4GQdnqmLrDqMSV8sIcraM9kXl4",
    authDomain: "trapape.firebaseapp.com",
    databaseURL: "https://trapape-default-rtdb.firebaseio.com",
    projectId: "trapape",
    storageBucket: "trapape.appspot.com",
    messagingSenderId: "716283415470",
    appId: "1:716283415470:web:c7030f4ed5853654e3963f",
    measurementId: "G-2WDY56NCLV"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
