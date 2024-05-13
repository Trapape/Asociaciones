import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDa20vvC_wglBAzX6Z1q1BBjEZJ7maUyTc",
    authDomain: "amotac-e366c.firebaseapp.com",
    projectId: "amotac-e366c",
    storageBucket: "amotac-e366c.appspot.com",
    messagingSenderId: "567007708771",
    appId: "1:567007708771:web:031f82e43efef3024b9a56",
    measurementId: "G-PXD5Q1YY41"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener una referencia al servicio de Firestore
const firestore = getFirestore(app);

export { app, firestore };
