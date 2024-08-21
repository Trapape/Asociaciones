import { initializeApp } from 'firebase/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase/firestore';


// Configuración de Firebase para el cliente
const firebaseConfig = {
    apiKey: "AIzaSyBs-iRGy4GQdnqmLrDqMSV8sIcraM9kXl4",
    authDomain: "trapape.firebaseapp.com",
    databaseURL: "https://trapape-default-rtdb.firebaseio.com",
    projectId: "trapape",
    storageBucket: "trapape.appspot.com",
    messagingSenderId: "716283415470",
    appId: "1:716283415470:web:c7030f4ed5853654e3963f",
};

// Inicializa la aplicación del cliente
initializeApp(firebaseConfig);

// Obtén la instancia de Firestore para el cliente
const db = getFirestore();

async function addPostWithComment(postId, comment) {
  try {
    await db.collection('PostsWebSite').doc(postId).set({
      comment: comment,
      createdAt: FieldValue.serverTimestamp()
    });
    console.log('Post added successfully.');
  } catch (error) {
    console.error('Error adding post:', error);
  }
}

async function addAssociations(associations) {
  try {
    const batch = db.batch();
    associations.forEach(association => {
      const docRef = db.collection('AsociacionesWebSite').doc(association.id);
      batch.set(docRef, association);
    });
    await batch.commit();
    console.log('Associations added successfully.');
  } catch (error) {
    console.error('Error adding associations:', error);
  }
}

async function addUsers(users) {
  try {
    const batch = db.batch();
    users.forEach(user => {
      const docRef = db.collection('UserWebSite').doc(user.id);
      batch.set(docRef, user);
    });
    await batch.commit();
    console.log('Users added successfully.');
  } catch (error) {
    console.error('Error adding users:', error);
  }
}

// Ejemplo de uso
const examplePostId = 'post-001';
const exampleComment = 'AMOTAC anuncia su nuevo programa de beneficios para los miembros. ¡No te lo pierdas!';
const exampleAssociations = [
  { id: 'amotac', name: 'AMOTAC', description: 'Asociación Mexicana de Organizaciones de Transportistas A.C.' },
  { id: 'asso1', name: 'Canacar', description: 'Cámara Nacional del Autotransporte de Carga' },
  { id: 'asso2', name: 'Conatram', description: 'Confederación Nacional de Transportistas Mexicanos' },
  { id: 'asso3', name: 'Canapat', description: 'Cámara Nacional del Autotransporte de Pasaje y Turismo' },
  { id: 'asso4', name: 'Anaf', description: 'Asociación Nacional de Transporte de Carga' }
];
const exampleUsers = [
  { id: 'user1', name: 'Juan Pérez', associationId: 'amotac' },
  { id: 'user2', name: 'María López', associationId: 'amotac' },
  { id: 'user3', name: 'Luis Gómez', associationId: 'canacar' },
  { id: 'user4', name: 'Ana Martínez', associationId: 'conatram' },
  { id: 'user5', name: 'Carlos Rodríguez', associationId: 'canapat' }
];

(async () => {
  await addPostWithComment(examplePostId, exampleComment);
  await addAssociations(exampleAssociations);
  await addUsers(exampleUsers);
})();
