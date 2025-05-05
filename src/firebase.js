// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXrT-mEDx9V_5QJQQrfI4C0-SqMlhhenc",
  authDomain: "hotelbooking-2d99c.firebaseapp.com",
  projectId: "hotelbooking-2d99c",
  storageBucket: "hotelbooking-2d99c.firebasestorage.app",
  messagingSenderId: "179171027287",
  appId: "1:179171027287:web:a653e5278bf962cc9bb612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };