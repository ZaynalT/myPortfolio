import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBliwnDKxBQ2TxHtbcpdgJ6jLeqF3C1vY0",
  authDomain: "myportfolio-25d8f.firebaseapp.com",
  projectId: "myportfolio-25d8f",
  storageBucket: "myportfolio-25d8f.firebasestorage.app",
  messagingSenderId: "424799380711",
  appId: "1:424799380711:web:c474c7d639c304df29ee42",
  measurementId: "G-8HRRQGFCJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to get all documents from a collection
export const getCollection = async (collectionName) => {
  try {
    const q = query(collection(db, collectionName), orderBy('id'));
    const querySnapshot = await getDocs(q);
    const projects = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Sort projects by numeric ID
    return projects.sort((a, b) => {
      const idA = typeof a.id === 'string' ? parseInt(a.id) : a.id;
      const idB = typeof b.id === 'string' ? parseInt(b.id) : b.id;
      return idA - idB;
    });
  } catch (error) {
    console.error("Error getting collection:", error);
    throw error;
  }
};

// Function to get a specific document by ID
export const getDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw error;
  }
};

export { db }; 