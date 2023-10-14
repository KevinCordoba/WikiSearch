import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCwVPKOQ2neAfeJ1unRXv6BUoygMczgHLw",
    authDomain: "duende-66094.firebaseapp.com",
    projectId: "duende-66094",
    storageBucket: "duende-66094.appspot.com",
    messagingSenderId: "707019887948",
    appId: "1:707019887948:web:f389a6998e02c03229ebe9"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  export const auth = getAuth(app);
  
  export { storage, db };